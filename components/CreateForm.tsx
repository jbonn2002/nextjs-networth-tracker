import { Button } from "@/components/ui/Button";
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
  subject: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50),
  message: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(200),
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
                <Input placeholder="Name" {...field} className="pl-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} className="pl-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <SelectMenu />
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
          >
            Create asset/liability
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateForm;
