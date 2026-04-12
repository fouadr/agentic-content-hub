import PageLayout from "@/components/PageLayout";
import { Clock } from "lucide-react";

const entries = [
  { date: "April 2, 2026", version: "v2.4.0", title: "AI Brand Voice 2.0", changes: ["Improved brand voice accuracy by 40%", "Added multi-language support for 12 new languages", "New tone adjustment slider for fine-tuned control"] },
  { date: "March 15, 2026", version: "v2.3.0", title: "Analytics Dashboard", changes: ["Real-time engagement metrics across all platforms", "Export reports as PDF or CSV", "Custom date range filters"] },
  { date: "February 28, 2026", version: "v2.2.0", title: "Team Collaboration", changes: ["Role-based access controls for team members", "Comment and approval workflows", "Shared content calendar view"] },
  { date: "January 20, 2026", version: "v2.1.0", title: "Bulk Scheduling", changes: ["Schedule up to 500 posts at once", "CSV import for bulk content upload", "Drag-and-drop calendar reordering"] },
  { date: "December 10, 2025", version: "v2.0.0", title: "Platform Launch", changes: ["Complete redesign of the content editor", "AI-powered hashtag suggestions", "Integration with Instagram, Facebook, and LinkedIn"] },
];

const Changelog = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Clock className="w-4 h-4" />
            Changelog
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">What's New</h1>
          <p className="text-muted-foreground">Stay up to date with the latest features, improvements, and fixes.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {entries.map((entry) => (
            <div key={entry.version} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">{entry.version}</span>
                <span className="text-sm text-muted-foreground">{entry.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{entry.title}</h3>
              <ul className="space-y-2">
                {entry.changes.map((change, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Changelog;