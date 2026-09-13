import { journeyStages, journeyCopy, initialJourneyId } from "@/data/journey";
import { Section } from "@/components/ui/section";
import { JourneyMap } from "@/components/journey/journey-map";
import { JourneyContext } from "@/components/journey/journey-context";
import "@/components/journey/trajectory.css";
export function Journey() {
  return (
    <Section
      id="journey"
      {...journeyCopy.heading}
      className="trajectory-section"
    >
      <JourneyMap
        stages={journeyStages}
        contexts={journeyStages.map((stage) => (
          <JourneyContext key={stage.id} stage={stage} />
        ))}
        initialId={initialJourneyId}
        title={journeyCopy.title}
        instructions={journeyCopy.instructions}
        mobileInstructions={journeyCopy.mobileInstructions}
        note={journeyCopy.note}
      />
    </Section>
  );
}
