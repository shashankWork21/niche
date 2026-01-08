"use client";

interface HiddenInputsProps {
  formStep: number;
  loseTrackOfTimeAreas: string[];
  lovedDoingAt10: string[];
  feelsLikePlay: string[];
  issuesSpokenAbout: string[];
  naturallyCuriousAbout: string[];
  continuouslyLearningAbout: string[];
  helpedOthersWith: string[];
  areasNeededHelp: string[];
  unspokenRules: string[];
  getFormValue: (field: string) => string;
}

export default function HiddenInputs({
  formStep,
  loseTrackOfTimeAreas,
  lovedDoingAt10,
  feelsLikePlay,
  issuesSpokenAbout,
  naturallyCuriousAbout,
  continuouslyLearningAbout,
  helpedOthersWith,
  areasNeededHelp,
  unspokenRules,
  getFormValue,
}: HiddenInputsProps) {
  return (
    <>
      {formStep !== 2 &&
        loseTrackOfTimeAreas.map((value, index) => (
          <input
            key={`hidden-loseTrack-${index}`}
            type="hidden"
            name="loseTrackOfTimeAreas"
            value={value}
          />
        ))}
      {formStep !== 2 &&
        lovedDoingAt10.map((value, index) => (
          <input
            key={`hidden-lovedDoing-${index}`}
            type="hidden"
            name="lovedDoingAt10"
            value={value}
          />
        ))}
      {formStep !== 2 &&
        feelsLikePlay.map((value, index) => (
          <input
            key={`hidden-feelsLike-${index}`}
            type="hidden"
            name="feelsLikePlay"
            value={value}
          />
        ))}
      {formStep !== 3 &&
        issuesSpokenAbout.map((value, index) => (
          <input
            key={`hidden-issues-${index}`}
            type="hidden"
            name="issuesSpokenAbout"
            value={value}
          />
        ))}
      {formStep !== 3 &&
        naturallyCuriousAbout.map((value, index) => (
          <input
            key={`hidden-curious-${index}`}
            type="hidden"
            name="naturallyCuriousAbout"
            value={value}
          />
        ))}
      {formStep !== 3 &&
        continuouslyLearningAbout.map((value, index) => (
          <input
            key={`hidden-learning-${index}`}
            type="hidden"
            name="continuouslyLearningAbout"
            value={value}
          />
        ))}
      {formStep !== 4 &&
        helpedOthersWith.map((value, index) => (
          <input
            key={`hidden-helped-${index}`}
            type="hidden"
            name="helpedOthersWith"
            value={value}
          />
        ))}
      {formStep !== 4 &&
        areasNeededHelp.map((value, index) => (
          <input
            key={`hidden-needed-${index}`}
            type="hidden"
            name="areasNeededHelp"
            value={value}
          />
        ))}
      {formStep !== 4 && (
        <input type="hidden" name="hereToDo" value={getFormValue("hereToDo")} />
      )}
      {formStep !== 5 && (
        <input
          type="hidden"
          name="wishMoreUnderstood"
          value={getFormValue("wishMoreUnderstood")}
        />
      )}
      {formStep !== 5 && (
        <input
          type="hidden"
          name="turningPoint"
          value={getFormValue("turningPoint")}
        />
      )}
      {formStep !== 5 &&
        unspokenRules.map((value, index) => (
          <input
            key={`hidden-rules-${index}`}
            type="hidden"
            name="unspokenRules"
            value={value}
          />
        ))}
    </>
  );
}
