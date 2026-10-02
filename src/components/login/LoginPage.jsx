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

export function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F7F9FA]">
      <Card className="grid items-center grid-cols-2 gap-10 p-0">
        <div
          className="bg-center bg-cover min-h-110"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>

        <div>
          <CardHeader className="mb-10 text-xl font-bold text-center min-w-100">
            <p>
              Wellcome To <span className="text-blue-500">Klinik App</span>
            </p>
          </CardHeader>

          <div className="flex flex-col gap-5">
            <CardContent>
              <div className="flex flex-col gap-5">
                <Field>
                  <FieldLabel htmlFor="input-field-username">
                    Username
                  </FieldLabel>
                  <InputGroup>
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
                  <InputGroup>
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

            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full cursor-pointer bg-sky-700 hover:bg-sky-700">
                Login
              </Button>

              <CardDescription className="text-[13px]">
                <p>
                  Don't have an account?{" "}
                  <a href="/register" className="hover:text-blue-500">
                    Sign up here.
                  </a>
                </p>
              </CardDescription>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
