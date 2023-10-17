import { Button, buttonVariants } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { formSchema, formSchemaReq } from "@/lib/validators/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import CurrencyInput from "react-currency-input-field";
import { useForm } from "react-hook-form";
import SelectMenu from "./SelectMenu";
import { useToast } from "./ui/use-toast";

const CreateForm = () => {
  const { toast } = useToast();

  const form = useForm<formSchemaReq>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      type: "",
      value: "",
    },
  });

  const router = useRouter();

  const { mutate: createItem, isLoading } = useMutation({
    mutationFn: async ({ name, description, type, value }: formSchemaReq) => {
      const payload = {
        name,
        description,
        type,
        value,
      };

      const { data } = await axios.post("/api/createItem", payload);
      return data;
    },
    onSuccess: () => {
      router.push("/dashboard");

      router.refresh();

      return toast({
        description: "Created",
        className: "text-green-400 bg-black",
      });
    },
  });

  async function onSubmit(data: formSchemaReq) {
    const payload: formSchemaReq = {
      name: data.name,
      description: data.description,
      type: data.type,
      value: data.value,
    };

    createItem(payload);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <SelectMenu
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                />
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
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button
            type="submit"
            isLoading={isLoading}
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
