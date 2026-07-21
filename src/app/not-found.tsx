// ============================================================================
// 404 Page — Custom not found page
// ============================================================================

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center py-32">
      <span className="font-[family-name:var(--font-space-grotesk)] text-8xl font-bold text-primary/20 mb-4">
        404
      </span>
      <h1 className="heading-display text-2xl text-text-primary mb-3">
        Page Not Found
      </h1>
      <p className="text-body text-text-secondary max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button
        variant="secondary"
        href="/"
        leftIcon={<ArrowLeft className="h-4 w-4" />}
      >
        Back to Home
      </Button>
    </Container>
  );
}
