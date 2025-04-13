import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { InsertLead, createLeadSchema } from "@shared/schema";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LeadForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  // Define form with validation schema
  const form = useForm<InsertLead>({
    resolver: zodResolver(createLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
    },
  });

  // Create mutation for submitting lead
  const createLead = useMutation({
    mutationFn: async (data: InsertLead) => {
      const response = await apiRequest("POST", "/api/leads", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you for reaching out!",
        description: "We've received your information and will contact you within 24 hours.",
        variant: "default",
      });
      setSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Oops! Something went wrong.",
        description: error.message || "Please try again or contact us directly at info@serenityyoga.com",
        variant: "destructive",
      });
    },
  });

  // Form submission handler
  const onSubmit = (data: InsertLead) => {
    createLead.mutate(data);
  };

  if (submitted) {
    return (
      <div className="p-4 bg-green-100 text-green-800 rounded-lg flex items-start">
        <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
        <div>
          <p className="font-medium">Thank you for reaching out!</p>
          <p>We've received your information and will contact you within 24 hours.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => setSubmitted(false)}
          >
            Submit another inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-neutral-900">
                Full Name *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                  {...field}
                />
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
              <FormLabel className="text-sm font-medium text-neutral-900">
                Email Address *
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-neutral-900">
                Phone Number *
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-neutral-900">
                Yoga Experience
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-6 months)</SelectItem>
                  <SelectItem value="intermediate">
                    Intermediate (6 months - 2 years)
                  </SelectItem>
                  <SelectItem value="advanced">Advanced (2+ years)</SelectItem>
                  <SelectItem value="none">No experience</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-neutral-900">
                Message (Optional)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your goals or any questions you have"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-colors font-medium text-lg flex items-center justify-center"
            disabled={createLead.isPending}
          >
            {createLead.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <span>Submit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}
          </Button>
        </div>

        {createLead.isError && (
          <div className="p-4 bg-red-100 text-red-800 rounded-lg flex items-start">
            <XCircle className="h-5 w-5 mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Oops! Something went wrong.</p>
              <p>
                Please try again or contact us directly at info@serenityyoga.com
              </p>
            </div>
          </div>
        )}
      </form>
    </Form>
  );
};

export default LeadForm;
