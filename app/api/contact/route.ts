import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types";

/**
 * Endpoint de contacto (implementação temporária / placeholder).
 *
 * Valida os dados e regista a mensagem no servidor. Está preparado para
 * integração futura com um serviço de email (ex.: Resend, SendGrid,
 * Nodemailer). Basta substituir o bloco assinalado por uma chamada real.
 */
export async function POST(request: Request) {
  let data: Partial<ContactFormData>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo do pedido inválido." }, { status: 400 });
  }

  const { name, email, subject, message } = data;

  // Validação básica no servidor
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios." },
      { status: 400 },
    );
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  // ─────────────────────────────────────────────────────────────
  // TODO: integrar com serviço de email.
  // Exemplo (Resend):
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "site@tiagofonseca.pt",
  //     to: "tiagoagfonseca@gmail.com",
  //     replyTo: email,
  //     subject: `[Site] ${subject}`,
  //     text: `De: ${name} <${email}>\n\n${message}`,
  //   });
  // ─────────────────────────────────────────────────────────────
  console.info("Nova mensagem de contacto:", { name, email, subject });

  return NextResponse.json({ ok: true }, { status: 200 });
}
