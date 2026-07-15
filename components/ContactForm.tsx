"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ContactFormData } from "@/types";

type Status = "idle" | "loading" | "success" | "error";

const initialData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const fieldClasses =
  "w-full rounded-xl border border-surface-line bg-white px-4 py-3 text-sm text-ink placeholder:text-body-muted/70 transition-colors focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof ContactFormData) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) =>
      setData((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setStatus("success");
      setData(initialData);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-surface-line bg-surface-muted p-6 shadow-card sm:p-8"
      aria-label="Formulário de contacto"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={data.name}
            onChange={update("name")}
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={data.email}
            onChange={update("email")}
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-ink">
          Assunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={data.subject}
          onChange={update("subject")}
          className={fieldClasses}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={data.message}
          onChange={update("message")}
          className={`${fieldClasses} resize-y`}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              A enviar…
            </>
          ) : (
            "Enviar Mensagem"
          )}
        </Button>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.p
              key="ok"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              role="status"
              className="flex items-center gap-1.5 text-sm font-medium text-green-600"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              Mensagem enviada. Obrigado!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              key="err"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              role="alert"
              className="flex items-center gap-1.5 text-sm font-medium text-red-600"
            >
              <AlertCircle className="h-4 w-4" aria-hidden />
              Ocorreu um erro. Tente novamente.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
