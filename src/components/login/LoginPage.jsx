import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Field, FieldLabel } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { UserCircleIcon } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import background from "../../assets/background2.jpg";
import logo from "../../assets/logo2.png";

export function LoginPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen md:bg-[#F7F9FA]">
      <img
        src={logo}
        alt="logo"
        className="md:hidden sm:hidden w-50 absolute top-8 left-1/2 -translate-x-1/2"
      />

      <Card className="border-0 shadow-none bg-transparent p-0 md:border-border md:shadow-sm md:bg-card grid items-center md:grid-cols-2 md:gap-10">
        <div
          className="hidden md:block bg-center bg-cover md:min-h-110"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>

        <div className="w-full max-w-md mx-auto p-4 md:p-6">
          <CardHeader className="mb-6 text-xl font-bold text-center md:min-w-100 p-0">
            <p>
              Welcome To <span className="text-blue-500">Klinika</span>
            </p>
          </CardHeader>

          <div className="flex flex-col gap-5">
            <CardContent className="p-0">
              <div className="flex flex-col gap-5">
                <Field>
                  <FieldLabel htmlFor="input-field-username">
                    Username
                  </FieldLabel>
                  <InputGroup className="bg-white border-border">
                    <InputGroupInput
                      id="input-field-username"
                      type="text"
                      placeholder="Enter your username"
                    />
                    <InputGroupAddon align="inline-end">
                      <UserCircleIcon />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel htmlFor="input-field-password">
                    Password
                  </FieldLabel>
                  <InputGroup className="bg-white border-border">
                    <InputGroupInput
                      id="input-field-password"
                      type="password"
                      placeholder="Enter your password"
                    />
                    <InputGroupAddon align="inline-end">
                      <LockKeyhole />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3 p-0">
              <Button className="w-full cursor-pointer bg-sky-700 hover:bg-sky-800">
                Login
              </Button>

              <CardDescription className="text-center text-xs md:text-sm">
                <p>
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="hover:text-blue-500 font-medium"
                  >
                    Sign up here.
                  </a>
                </p>
              </CardDescription>
            </CardFooter>
          </div>
        </div>
      </Card>

      <div className="absolute bottom-0 left-0 w-full md:hidden pointer-events-none">
        <svg
          viewBox="0 24 150 140"
          preserveAspectRatio="none"
          className="block w-full h-38"
        >
          <style>{`
            @keyframes m {
              from { transform: translateX(-90px); }
              to { transform: translateX(85px); }
            }
            .l0 { animation: m 10s linear infinite 0s; }
            .l1 { animation: m 13s linear infinite -2s; }
          `}</style>
          <defs>
            {/* Gradien Vertikal Terpadu dari atas ke dasar */}
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="50%" stopColor="#009eea" />
              <stop offset="100%" stopColor="#0077cc" />
            </linearGradient>

            {/* Path Gelombang Presisi dari Anda, Batas Bawah Diperpanjang ke Y=200 */}
            <path
              id="w"
              d="M -160 40 Q -116 27 -72 40 Q -28 53 16 40 Q 60 27 104 40 Q 148 53 192 40 L 192 200 L -160 200 Z"
            />
          </defs>
          <g>
            <use
              href="#w"
              xlinkHref="#w"
              x="48"
              y="0"
              fill="url(#waveGradient)"
              opacity="0.3"
              className="l0"
            />
            <use
              href="#w"
              xlinkHref="#w"
              x="73"
              y="3"
              fill="url(#waveGradient)"
              opacity="0.7"
              className="l1"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
