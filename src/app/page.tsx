import Link from "next/link";

import { CodyMascot } from "@/components/CodyMascot";
import { CodyQuoteBubble } from "@/components/CodyQuoteBubble";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col">
      {/* HERO */}
      <section className="border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs uppercase tracking-wide text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Offline-first AI OS on a USB stick
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              FileCherry
              <span className="block text-amber-300">
                Files in, cherries out.
              </span>
            </h1>
            <p className="text-neutral-300 text-lg">
              Drop your entire chaos folder into <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">inputs/</code>, boot off
              the stick, and let Cody the Cherry Picker drag it through local
              AI pipelines. Images, PDFs, CSVs, weird exports – he hauls
              everything and stacks the results neatly in <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">outputs/</code>.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="rounded-full bg-amber-400 text-neutral-950 px-6 py-2.5 text-sm font-semibold hover:bg-amber-300 transition">
                Download ISO (soon™)
              </button>
              <Link
                href="/docs"
                className="rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-medium text-neutral-100 hover:bg-neutral-900 transition"
              >
                Read the nerd docs
              </Link>
            </div>
            <p className="text-xs text-neutral-500 pt-2">
              Built for people who have more files than patience. Cody has both
              a back injury and excellent work ethic.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <CodyMascot size="lg" mood="idle" className="drop-shadow-2xl" />
              <CodyQuoteBubble />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS THIS */}
      <section className="border-b border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-12 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">What the heck is FileCherry?</h2>
            <p className="text-neutral-300">
              FileCherry is a <strong>tiny Linux OS on a USB drive</strong> that only does
              one thing: chew through whatever you dump into its{" "}
              <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">inputs/</code> folder using local AI (Ollama + ComfyUI +
              document pipelines), then spit nice clean results into{" "}
              <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">outputs/</code>.
            </p>
            <p className="text-neutral-300">
              No logins, no dashboards, no mystery SaaS. Just:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-1">
              <li>Boot from the stick.</li>
              <li>Tell Cody what you want done with the files.</li>
              <li>Shut down, unplug, grab your processed goodies.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 text-sm text-neutral-200 space-y-2">
            <div className="font-semibold text-amber-300">
              Cody&apos;s current skill tree
            </div>
            <ul className="space-y-1">
              <li>• Clean &amp; enhance product / car photos via ComfyUI</li>
              <li>• Read all your PDFs &amp; reports, summarize by topic</li>
              <li>• Cross-document Q&amp;A over whatever you dumped in</li>
              <li>• Organize outputs into job folders with manifests</li>
            </ul>
            <p className="text-xs text-neutral-500 pt-1">
              Future unlocks: auto-generated app repos from your docs, GitHub
              push, Cody-as-a-service, etc.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            How it works
          </h2>
          <p className="text-neutral-400 text-center mb-8">
            Under the hood: Ollama, ComfyUI and a Python orchestrator.
            On the surface: three steps and a guy with too many cherries.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 flex flex-col gap-2 transition-all duration-300 hover:bg-neutral-900/80 hover:border-neutral-700 cursor-pointer">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Step 1
              </div>
              <h3 className="font-semibold">Dump everything into <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">inputs/</code></h3>
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <p className="text-sm text-neutral-300 pt-2">
                  On your normal OS, plug in the stick and treat it like any
                  other drive. Toss in images, PDFs, docs, CSVs, exports – Cody
                  doesn&apos;t judge your folder naming choices.
                </p>
                <p className="text-xs text-neutral-500 pt-2">
                  Bonus points if you resist the urge to tidy first. This is a
                  chaos-friendly zone.
                </p>
              </div>
            </div>
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 flex flex-col gap-2 transition-all duration-300 hover:bg-neutral-900/80 hover:border-neutral-700 cursor-pointer">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Step 2
              </div>
              <h3 className="font-semibold">Boot, talk, let Cody plan</h3>
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <p className="text-sm text-neutral-300 pt-2">
                  Boot from the USB. FileCherry scans <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">inputs/</code>, then
                  Ollama asks: <em>&ldquo;What do you want to do with these
                  files?&rdquo;</em>
                </p>
                <p className="text-sm text-neutral-300 pt-2">
                  You answer in plain English. The orchestrator builds a plan and
                  drives ComfyUI + doc analysis pipelines while Cody pretends
                  this is fine.
                </p>
              </div>
            </div>
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 flex flex-col gap-2 transition-all duration-300 hover:bg-neutral-900/80 hover:border-neutral-700 cursor-pointer">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Step 3
              </div>
              <h3 className="font-semibold">Shut down &amp; grab the cherries</h3>
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <p className="text-sm text-neutral-300 pt-2">
                  When Cody&apos;s done, everything is neatly stacked in{" "}
                  <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">outputs/&lt;job-id&gt;/</code> – cleaned images, reports,
                  manifests, whatever you asked for.
                </p>
                <p className="text-xs text-neutral-500 pt-2">
                  Power off, unplug, plug back into your Mac/PC, drag the
                  results into your real life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-b border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Who is this actually for?
            </h2>
            <p className="text-neutral-300 mb-4">
              FileCherry is for people who live inside <strong>messy shared drives</strong>,
              exports, and email attachments, but still want to look like they
              have their life together.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm">
                <div className="font-semibold mb-1">Car &amp; product photos</div>
                <p className="text-neutral-300">
                  Dealers, photographers, marketplaces: toss in raw photos,
                  get back cleaned, cropped, consistent images for listings.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm">
                <div className="font-semibold mb-1">Ops &amp; leadership packs</div>
                <p className="text-neutral-300">
                  Drop in a quarter&apos;s worth of reports, CSVs, and slides.
                  Get a structured summary by topic with links back to sources.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm">
                <div className="font-semibold mb-1">Research dumps</div>
                <p className="text-neutral-300">
                  Paper PDFs, notes, screenshots – FileCherry chews through
                  them and spits out a reading guide + key takeaways.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm">
                <div className="font-semibold mb-1">&ldquo;Make me a spec&rdquo; mode</div>
                <p className="text-neutral-300">
                  Future mode: scratch docs in, full-blown app spec and starter
                  repo out, ready for Claude/Cursor to take over.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 text-sm">
            <div className="flex items-center gap-3 mb-3">
              <CodyMascot size="sm" />
              <div className="font-semibold text-amber-300">
                Cody&apos;s guarantee
              </div>
            </div>
            <p className="text-neutral-300 mb-2">
              &ldquo;You bring the chaos folder. I&apos;ll bring:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-1">
              <li>Local-only processing (no secret cloud leaks)</li>
              <li>Repeatable pipelines instead of one-off scripts</li>
              <li>Outputs so clean you&apos;ll pretend you planned it&rdquo;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* NERD CORNER */}
      <section className="border-b border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Nerd corner
            </h2>
            <p className="text-neutral-300 mb-4">
              Underneath the jokes it&apos;s a serious little box.
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                • Ubuntu-based live OS with a read-only system partition +{" "}
                <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">/data</code> partition for <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">inputs/</code>,{" "}
                <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">outputs/</code>, <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">config/</code>, <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">logs/</code>.
              </li>
              <li>
                • Orchestrator in Python talking to Ollama and ComfyUI over
                HTTP.
              </li>
              <li>
                • Ollama for planning and long-form text; ComfyUI for headless
                image pipelines.
              </li>
              <li>
                • Document pipeline: extraction → embeddings → semantic search →
                LLM reports.
              </li>
              <li>
                • Everything described in obsessive detail in{" "}
                <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">docs/</code> so other people can hack on it.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 text-sm space-y-3">
            <h3 className="font-semibold">Planned hardware targets</h3>
            <ul className="text-neutral-300 space-y-1">
              <li>• Thin client mode (docs + cloud LLM)</li>
              <li>• 12GB VRAM local GPU appliance for SD + docs</li>
              <li>• &ldquo;Ridiculous workstation&rdquo; profile for people who hoard GPUs</li>
            </ul>
            <p className="text-xs text-neutral-500">
              If you&apos;re reading this section, you are the target audience
              for the GitHub repo, not the one who gets handed the USB in
              accounting.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Frequently asked questions Cody is tired of answering
          </h2>
          <div className="space-y-5 text-sm text-neutral-200">
            <div>
              <div className="font-semibold">
                &ldquo;Is this yet another hosted AI dashboard?&rdquo;
              </div>
              <p className="text-neutral-300">
                Nope. It&apos;s a bootable OS. No browser tabs, no subscription
                paywall. You literally reboot from a USB stick and talk to the
                box.
              </p>
            </div>
            <div>
              <div className="font-semibold">
                &ldquo;Do my files leave the building?&rdquo;
              </div>
              <p className="text-neutral-300">
                By default, no. Everything runs locally on the machine you boot
                FileCherry on. Cloud extras (bigger models, GitHub pushes) are
                strictly opt-in and clearly labeled.
              </p>
            </div>
            <div>
              <div className="font-semibold">
                &ldquo;Can I add my own pipelines?&rdquo;
              </div>
              <p className="text-neutral-300">
                Yes. You can drop new ComfyUI graphs and doc workflows into{" "}
                <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">config/</code>. The orchestrator treats them as tools the
                planner can call. There&apos;s a whole section on this in the
                docs.
              </p>
            </div>
            <div>
              <div className="font-semibold">
                &ldquo;Will Cody judge my folder names?&rdquo;
              </div>
              <p className="text-neutral-300">
                Yes, silently, but he will still process your{" "}
                <code className="px-1.5 py-0.5 rounded bg-neutral-900 text-amber-300">final_v7_REAL_final_USE_THIS_ONE</code> files.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CodyMascot size="md" />
            <p className="text-neutral-300 text-center text-sm max-w-md">
              When you&apos;re ready to play, grab the ISO, flash a stick, and
              start yelling instructions at a cartoon cherry picker who secretly
              orchestrates a full AI stack.
            </p>
            <button className="rounded-full bg-amber-400 text-neutral-950 px-6 py-2.5 text-sm font-semibold hover:bg-amber-300 transition">
              Get FileCherry (dev preview)
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900 bg-neutral-950 py-4">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} FileCherry. Cody&apos;s back hurts.</span>
          <div className="flex gap-4">
            <Link href="/docs" className="hover:text-neutral-300">
              Docs
            </Link>
            <Link href="https://github.com/funwae/file-cherry" className="hover:text-neutral-300" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

