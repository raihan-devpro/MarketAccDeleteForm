import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { toast } from "sonner";

export default function MarketAccountDeletionForm() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!confirm) {
      toast.warning(
        "Please confirm that you understand this action is irreversible.",
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    toast.success(
      `Your account deletion request for ${email} has been received.`,
    );
    setIsSubmitting(false);
    setEmail("");
    setReason("");
    setConfirm(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-lg p-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-lg font-bold">
            Account Deletion Request
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700"
              >
                Reason for Deletion (optional)
              </label>
              <Textarea
                id="reason"
                placeholder="Let us know why you're leaving"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="confirm"
                checked={confirm}
                onCheckedChange={(checked) => setConfirm(checked === true)}
              />
              <label htmlFor="confirm" className="text-sm">
                I understand that this action is irreversible.
              </label>
            </div>
            <CardFooter className="flex justify-center">
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting..." : "Delete My Account"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
