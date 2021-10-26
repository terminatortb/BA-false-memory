// In this file you can specify the trial data for your experiment


const trial_info = {
    self_paced_reading: [
        {
            QUD: "Remember these words",
            help_text: "just press SPACE",
            sentence: "window | sleep | word | test",
            option1: "Stop",
            option2: "Next",
            wordPos: "same"

        }
    ],
};


const trial_info_negative = {
  self_paced_reading: [
      {
          QUD: "Remember these words",
          help_text: "just press Space",
          sentence: "rape | victim | night",
          option1: "Stop",
          option2: "Next",
          wordPos: "same"
      }
  ],
};


const trial_info_positive = {
  self_paced_reading: [
      {
          QUD: "Remember these words",
          help_text: "just press SPACE",
          sentence: "family | brother | sister",
          option1: "Stop",
          option2: "Next",
          wordPos: "same",
      }
  ],
};
