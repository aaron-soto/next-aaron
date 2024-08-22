"use client";

import React, { useState } from "react";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface SignInFormValues {
  email: string;
  password: string;
  remember_me: boolean;
}

const SignInPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInFormValues>();
  const router = useRouter();
  const auth = getAuth();

  const onSubmit = async (data: SignInFormValues) => {
    setLoading(true);

    const { email, password, remember_me } = data;

    const persistence = remember_me
      ? browserLocalPersistence
      : browserSessionPersistence;

    try {
      await setPersistence(auth, persistence);
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/");
    } catch (error: any) {
      setError("email", {
        type: "manual",
        message: error.message || "An unexpected error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex my-16 items-center">
      <div className="w-[400px] mx-auto">
        <h1 className="text-2xl font-bold text-center">Welcome back</h1>
        <p className="mb-6 text-center text-gray-500">
          Sign in to your account to continue
        </p>

        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-100"></div>
          <p className="mx-4 text-xs text-gray-300">OR</p>
          <div className="flex-1 h-px bg-gray-100"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              autoComplete="email"
              placeholder="Enter your email..."
              {...register("email", { required: "Email is required" })}
              className="text-base"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Enter your password..."
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="text-base"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox className="w-4 h-4" {...register("remember_me")} />
              <span className="ml-2">Remember me</span>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 underline hover:no-underline hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            {loading ? (
              <Button className="w-full" disabled>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Signing In...
              </Button>
            ) : (
              <Button className="w-full" type="submit">
                Sign In
              </Button>
            )}
          </div>

          <p className="text-sm text-center">
            Don&apos;t have an account yet?{" "}
            <Link href="/sign-up" className="font-semibold underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
