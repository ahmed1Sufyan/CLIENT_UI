import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

export function AnimatedButton() {
  return (
    <AnimatedSubscribeButton
      buttonColor="#1a1a1a"
      buttonTextColor="#ffffff"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center">
          Subscribe{" "}
          <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 size-4" />
          Subscribed{" "}
        </span>
      }
    />
  );
}
