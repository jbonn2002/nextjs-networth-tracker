import { Button, buttonVariants } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import SelectMenu from "./SelectMenu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50),
  email: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50),
  description: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(500),
  value: z.number().min(1, {
    message: "Name must be at least 1 characters.",
  }),
  type: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50),
});

const CreateForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const [input, setInput] = useState<string>("");
  const router = useRouter();

  return (
    <Form {...form}>
      <form onSubmit={() => {}} className="space-y-6">
        <div>
          <p className="text-lg font-medium">Name</p>
          <p className="text-xs pb-2">
            Community names including capitalization cannot be changed.
          </p>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Name"
                  {...field}
                  className="pl-6 placeholder:text-green-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={() => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <SelectMenu />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Description"
                  {...field}
                  className="pl-6 placeholder:text-green-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value</FormLabel>
              <FormControl>
                <CurrencyInput
                  placeholder="$100,000"
                  className="flex placeholder:text-green-400 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  prefix="$"
                  decimalsLimit={2}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button variant="ghost" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            // isLoading={isLoading}
            disabled={input.length === 0}
            onClick={() => {}}
            className={buttonVariants({
              variant: "outline",
              className: "text-green-400 bg-black border-none",
            })}
          >
            Create asset/liability
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateForm;
