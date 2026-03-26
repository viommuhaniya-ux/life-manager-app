import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  ChartNoAxesCombined,
  LayoutTemplate,
  Sparkles,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

const navLinks = ["Home", "Features", "AI Models", "How It Works", "Pricing"];

const aiModels = [
  { name: "ChatGPT", desc: "Reliable coding co-pilot for architecture and debugging.", tag: "Best for coding" },
  { name: "Claude", desc: "Structured reasoning and long-context code editing.", tag: "Deep reasoning" },
  { name: "Gemini", desc: "Multimodal workflows for docs, UI and code generation.", tag: "Multimodal speed" },
  { name: "Grok", desc: "Fast exploratory iteration with sharp developer context.", tag: "Fast responses" }
];

const steps = [
  "Choose your AI model",
  "Enter your prompt",
  "Generate code instantly",
  "Edit, compare, and export"
];

const stats = ["1M+ Lines of Code Generated", "10K+ Developers", "4 AI Models Integrated", "<5 sec Response Time"];

const featureGrid = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Instant Code Generation",
    text: "Ship prototypes and production-ready modules in minutes."
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Multi-AI Comparison",
    text: "Benchmark model outputs side-by-side to pick the strongest result."
  },
  {
    icon: <LayoutTemplate className="h-5 w-5" />,
    title: "Image → Code UI Generation",
    text: "Turn screenshots and sketches into responsive components instantly."
  },
  {
    icon: <RocketIcon />,
    title: "Production-ready Output",
    text: "Clean code, sensible structure, and export pipelines built-in."
  }
];

const appear = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="liquid-orb absolute -left-16 top-24 h-52 w-52 rounded-full bg-neonPurple/30" />
      <div className="liquid-orb absolute right-0 top-64 h-72 w-72 rounded-full bg-neonBlue/20" />

      <header className="fixed left-0 right-0 top-4 z-50 mx-auto w-[96%] max-w-6xl rounded-full border border-white/20 bg-black/45 px-6 py-3 backdrop-blur-xl">
        <nav className="flex items-center justify-between gap-4">
          <div className="text-lg font-semibold tracking-wide">Code Space</div>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            {navLinks.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <Button className="px-5 py-2">Start Coding</Button>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto flex min-h-[110vh] w-[92%] max-w-6xl flex-col justify-center pt-32">
          <motion.div initial="hidden" animate="show" transition={{ duration: 0.8 }} variants={appear} className="space-y-8">
            <Badge className="w-fit">New — Multi-AI Coding Platform</Badge>
            <h1 className="max-w-4xl font-heading text-5xl italic leading-[0.95] tracking-tight text-gradient md:text-7xl">
              Code with Every AI. In One Place.
            </h1>
            <p className="max-w-2xl text-lg text-white/75 md:text-xl">
              ChatGPT, Claude, Gemini, and Grok — all inside one powerful developer workspace.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button>Start Coding</Button>
              <Button variant="secondary">Try AI Playground</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-16 grid gap-6 lg:grid-cols-3"
          >
            <GlassCard className="lg:col-span-2">
              <div className="mb-4 flex items-center justify-between text-xs text-white/60">
                <span>editor.tsx</span>
                <span>VS Code Live Preview</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-sm text-cyan-100/90">
                <p>const buildLanding = async () =&gt; {'{'}</p>
                <p className="pl-4 text-purple-200">const ui = await ai.generateUI(&quot;premium dark landing&quot;)</p>
                <p className="pl-4 text-blue-200">const api = await ai.createBackend(&quot;auth, billing, analytics&quot;)</p>
                <p className="pl-4 text-emerald-200">return deploy({'{'} ui, api {'}'})</p>
                <p>{'}'};</p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="mb-4 flex items-center gap-2 text-sm text-white/80">
                <Bot className="h-4 w-4 text-neonCyan" /> AI Chat Interface
              </div>
              <div className="space-y-2 text-sm">
                <p className="rounded-xl bg-white/5 p-3 text-white/70">Prompt: "Build a billing dashboard with charts."</p>
                <p className="rounded-xl bg-neonBlue/20 p-3">Done. Added auth guards, chart widgets, and API routes.</p>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <SectionHeading title="All the best AI models. One interface." subtitle="Model-specific strengths, unified under one premium workspace." />
        <section className="mx-auto w-[92%] max-w-6xl pb-24">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aiModels.map((model, i) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <GlassCard className="h-full">
                  <Sparkles className="mb-3 h-5 w-5 text-neonCyan" />
                  <h3 className="text-xl font-medium">{model.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{model.desc}</p>
                  <Badge className="mt-4 w-fit text-[10px]">{model.tag}</Badge>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <SectionHeading title="You ask. AI builds." subtitle="From idea to production-ready code in seconds." />
        <section className="mx-auto w-[92%] max-w-6xl pb-24">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <GlassCard key={step} className="relative">
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">{idx + 1}</span>
                <p className="text-white/90">{step}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-[92%] max-w-6xl gap-10 pb-24 lg:grid-cols-2">
          <GlassCard className="flex flex-col justify-between gap-4">
            <div>
              <h3 className="font-heading text-4xl italic">Build full apps instantly</h3>
              <p className="mt-3 text-white/70">Generate frontend, backend, and deployment logic in one guided flow.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/45 p-4 text-sm text-white/70">Prompt history + templates keep your workflow fast and reusable.</div>
          </GlassCard>
          <GlassCard className="flex flex-col justify-between gap-4">
            <div>
              <h3 className="font-heading text-4xl italic">Compare multiple AIs side-by-side</h3>
              <p className="mt-3 text-white/70">Switch between outputs seamlessly, merge ideas, and export the best result.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg bg-white/5 p-3">ChatGPT Output</div>
              <div className="rounded-lg bg-neonPurple/20 p-3">Claude Output</div>
            </div>
          </GlassCard>
        </section>

        <section className="mx-auto w-[92%] max-w-6xl pb-24">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featureGrid.map((f) => (
              <GlassCard key={f.title}>
                <div className="mb-3 inline-flex rounded-lg border border-white/20 bg-white/5 p-2 text-neonCyan">{f.icon}</div>
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mx-auto w-[92%] max-w-6xl pb-24">
          <GlassCard className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat} className="text-center">
                <p className="font-heading text-3xl italic text-gradient">{stat.split(" ")[0]}</p>
                <p className="mt-2 text-sm text-white/70">{stat.replace(stat.split(" ")[0], "").trim()}</p>
              </div>
            ))}
          </GlassCard>
        </section>

        <section className="mx-auto w-[92%] max-w-6xl pb-24">
          <SectionHeading title="Loved by developers shipping fast." subtitle="Real builders using Code Space to move from prompt to production." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["It feels like having a senior engineering team on demand.", "Aarav M.", "Indie Hacker"],
              ["We cut prototype time from weeks to days across multiple products.", "Mina T.", "Startup Founder"],
              ["The side-by-side AI compare mode is an unfair advantage.", "Jordan K.", "Software Engineer"]
            ].map(([quote, name, role]) => (
              <GlassCard key={name}>
                <p className="text-white/80">“{quote}”</p>
                <p className="mt-6 font-medium">{name}</p>
                <p className="text-sm text-white/50">{role}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mx-auto w-[92%] max-w-6xl pb-24">
          <GlassCard className="space-y-8 py-14 text-center">
            <h2 className="font-heading text-5xl italic text-gradient">Build faster than ever before.</h2>
            <p className="mx-auto max-w-2xl text-white/70">
              Start coding with the world&apos;s most powerful AI models — all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>Start Coding</Button>
              <Button variant="secondary">View Pricing</Button>
            </div>
          </GlassCard>
        </section>
      </main>
    </div>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="mx-auto w-[92%] max-w-6xl pb-10 pt-4">
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={appear}
        className="font-heading text-4xl italic tracking-tight md:text-5xl"
      >
        {title}
      </motion.h2>
      <p className="mt-3 max-w-2xl text-white/70">{subtitle}</p>
    </section>
  );
}

function RocketIcon() {
  return <ChartNoAxesCombined className="h-5 w-5" />;
}
