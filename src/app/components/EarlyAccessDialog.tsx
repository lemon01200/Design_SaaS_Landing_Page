import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { sendFeishuNotification } from "../lib/feishu";

interface EarlyAccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EarlyAccessDialog({ open, onOpenChange }: EarlyAccessDialogProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [waitlistNumber] = useState(Math.floor(Math.random() * 50) + 20); // Random number 20-70
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const now = new Date();
      const submittedAt = now.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      sendFeishuNotification({
        email,
        submittedAt,
        productName: "ReqVerdict",
      });
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset state after dialog closes
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 300);
  };

  const handleSampleReport = () => {
    handleClose();
    navigate("/sample-report");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          // Initial State
          <div className="flex flex-col items-center text-center space-y-6 py-6">
            <Badge className="bg-[#E0A800] text-black px-4 py-2 hover:bg-[#E0A800]">
              <span className="inline-block w-2 h-2 rounded-full bg-black mr-2"></span>
              EARLY ACCESS
            </Badge>

            <DialogHeader className="space-y-4">
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                Be the first to know when<br />a JD is worth taking.
              </DialogTitle>
              <DialogDescription className="text-base text-gray-600">
                Join the waitlist. First 100 recruiters lock in Pro free
                for 6 months after launch.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full text-center"
              />
              <Button
                type="submit"
                className="w-full bg-[#2E2A5C] hover:bg-[#2E2A5C]/90"
                size="lg"
              >
                Get early access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <p className="text-sm text-gray-500">
              No spam. One update when we launch. You can opt out anytime.
            </p>
          </div>
        ) : (
          // Success State
          <div className="flex flex-col items-center text-center space-y-6 py-6">
            <div className="w-16 h-16 rounded-full bg-[#E6F4EC] flex items-center justify-center">
              <Check className="w-8 h-8 text-[#2F9E5A]" strokeWidth={3} />
            </div>

            <DialogHeader className="space-y-4">
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                You're on the list.
              </DialogTitle>
              <DialogDescription className="text-base text-gray-700">
                You're #{waitlistNumber} of 100 early members.
              </DialogDescription>
            </DialogHeader>

            <p className="text-base text-gray-600 leading-relaxed">
              We'll send you a free market report for one of your JDs as
              soon as we launch.
            </p>

            <div className="w-full pt-4 space-y-3">
              <p className="text-sm text-gray-600">
                While you wait — want to see what a report looks like?
              </p>
              <Button
                onClick={handleSampleReport}
                variant="outline"
                className="w-full"
                size="lg"
              >
                See a sample report <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
