import ChartCard from "../components/chartCard";
import Likert from "../components/likert";
import Key from "../components/key";

export default function Home() {
  //TODO work out a less hacky way of doing this
  //Digital Files
  const DF_FF_L_App = {
    stronglyDisagree: 46.2963,
    disagree: 22.222,
    somewhatDisagree: 9.2593,
    neutral: 7.4074,
    somewhatAgree: 7.4074,
    agree: 4.6296,
    stronglyAgree: 2.777,
  };

  const DF_FF_D_App = {
    stronglyDisagree: 21.2963,
    disagree: 8.3333,
    somewhatDisagree: 10.1852,
    neutral: 11.11111,
    somewhatAgree: 20.3704,
    agree: 17.5926,
    stronglyAgree: 11.1111,
  };

  const DF_CO_L_App = {
    stronglyDisagree: 84.2593,
    disagree: 12.037,
    somewhatDisagree: 1.8519,
    neutral: 0.9259,
    somewhatAgree: 0,
    agree: 0.9259,
    stronglyAgree: 0,
  };

  const DF_CO_D_App = {
    stronglyDisagree: 76.8519,
    disagree: 17.5926,
    somewhatDisagree: 2.7778,
    neutral: 2.7778,
    somewhatAgree: 0,
    agree: 0,
    stronglyAgree: 0,
  };

  // Location data
  const LD_FF_L_App = {
    stronglyDisagree: 45.3704,
    disagree: 26.8519,
    somewhatDisagree: 12.963,
    neutral: 4.6296,
    somewhatAgree: 4.4696,
    agree: 3.7037,
    stronglyAgree: 1.8519,
  };

  const LD_FF_D_App = {
    stronglyDisagree: 25.9259,
    disagree: 14.8148,
    somewhatDisagree: 11.1111,
    neutral: 14.8148,
    somewhatAgree: 19.444,
    agree: 7.4074,
    stronglyAgree: 6.4815,
  };

  const LD_CO_L_App = {
    stronglyDisagree: 64.815,
    disagree: 14.815,
    somewhatDisagree: 5.555,
    neutral: 6.481,
    somewhatAgree: 7.4074,
    agree: 0.9259,
    stronglyAgree: 0,
  };

  const LD_CO_D_App = {
    stronglyDisagree: 61.111,
    disagree: 16.667,
    somewhatDisagree: 6.4815,
    neutral: 7.4074,
    somewhatAgree: 3.7037,
    agree: 2.7778,
    stronglyAgree: 1.8519,
  };

  // Private messaging
  const PM_FF_L_App = {
    stronglyDisagree: 69.4444,
    disagree: 18.5185,
    somewhatDisagree: 6.4815,
    neutral: 1.85185,
    somewhatAgree: 0.9259,
    agree: 0.9259,
    stronglyAgree: 1.8519,
  };

  const PM_FF_D_App = {
    stronglyDisagree: 43.5185,
    disagree: 19.4444,
    somewhatDisagree: 12.963,
    neutral: 6.4815,
    somewhatAgree: 9.2593,
    agree: 3.7037,
    stronglyAgree: 4.6296,
  };

  const PM_CO_L_App = {
    stronglyDisagree: 87.963,
    disagree: 8.3333,
    somewhatDisagree: 2.7778,
    neutral: 0.9259,
    somewhatAgree: 0,
    agree: 0,
    stronglyAgree: 0,
  };

  const PM_CO_D_App = {
    stronglyDisagree: 83.333,
    disagree: 12.037,
    somewhatDisagree: 2.7778,
    neutral: 0,
    somewhatAgree: 1.8519,
    agree: 0,
    stronglyAgree: 0,
  };

  // Permission - Digital Files
  const DF_FF_L_Per = {
    stronglyDisagree: 14.815,
    disagree: 20.37,
    somewhatDisagree: 7.4074,
    neutral: 15.741,
    somewhatAgree: 21.296,
    agree: 12.037,
    stronglyAgree: 8.3333,
  };

  const DF_FF_D_Per = {
    stronglyDisagree: 7.4074,
    disagree: 12.037,
    somewhatDisagree: 3.7037,
    neutral: 6.4815,
    somewhatAgree: 23.148,
    agree: 25.926,
    stronglyAgree: 21.296,
  };

  const DF_CO_L_Per = {
    stronglyDisagree: 55.55556,
    disagree: 23.14815,
    somewhatDisagree: 7.407,
    neutral: 5.555,
    somewhatAgree: 6.4815,
    agree: 1.8152,
    stronglyAgree: 0,
  };

  const DF_CO_D_Per = {
    stronglyDisagree: 57.407,
    disagree: 22.222,
    somewhatDisagree: 12.963,
    neutral: 5.5556,
    somewhatAgree: 1.8519,
    agree: 0,
    stronglyAgree: 0,
  };

  // Permission - Location Data
  const LD_FF_L_Per = {
    stronglyDisagree: 23.148,
    disagree: 17.593,
    somewhatDisagree: 12.963,
    neutral: 12.037,
    somewhatAgree: 15.741,
    agree: 11.111,
    stronglyAgree: 7.4074,
  };

  const LD_FF_D_Per = {
    stronglyDisagree: 19.444,
    disagree: 9.2593,
    somewhatDisagree: 5.5556,
    neutral: 13.88,
    somewhatAgree: 24.074,
    agree: 16.667,
    stronglyAgree: 11.111,
  };

  const LD_CO_L_Per = {
    stronglyDisagree: 36.111,
    disagree: 16.667,
    somewhatDisagree: 12.037,
    neutral: 12.037,
    somewhatAgree: 15.741,
    agree: 5.5556,
    stronglyAgree: 1.8519,
  };

  const LD_CO_D_Per = {
    stronglyDisagree: 38.889,
    disagree: 22.222,
    somewhatDisagree: 9.2593,
    neutral: 14.815,
    somewhatAgree: 11.111,
    agree: 0,
    stronglyAgree: 1.8519,
  };

  // Permission - Private Messaging
  const PM_FF_L_Per = {
    stronglyDisagree: 41.667,
    disagree: 25.926,
    somewhatDisagree: 7.4074,
    neutral: 4.6296,
    somewhatAgree: 12.963,
    agree: 3.7037,
    stronglyAgree: 3.7037,
  };

  const PM_FF_D_Per = {
    stronglyDisagree: 28.704,
    disagree: 24.074,
    somewhatDisagree: 7.4074,
    neutral: 10.185,
    somewhatAgree: 12.037,
    agree: 7.4074,
    stronglyAgree: 10.185,
  };

  const PM_CO_L_Per = {
    stronglyDisagree: 64.815,
    disagree: 24.074,
    somewhatDisagree: 4.6296,
    neutral: 1.8519,
    somewhatAgree: 2.7778,
    agree: 0.9259,
    stronglyAgree: 0.9259,
  };

  const PM_CO_D_Per = {
    stronglyDisagree: 60.185,
    disagree: 24.074,
    somewhatDisagree: 7.4074,
    neutral: 0.9259,
    somewhatAgree: 4.6296,
    agree: 1.8519,
    stronglyAgree: 0.9259,
  };

  // Likelihood Self - Digital Files
  const DF_FF_L_LikS = {
    stronglyDisagree: 5.5556,
    disagree: 18.519,
    somewhatDisagree: 12.037,
    neutral: 31.481,
    somewhatAgree: 17.593,
    agree: 7.4074,
    stronglyAgree: 7.4074,
  };

  const DF_FF_D_LikS = {
    stronglyDisagree: 1.8519,
    disagree: 6.4815,
    somewhatDisagree: 7.4074,
    neutral: 18.519,
    somewhatAgree: 25,
    agree: 26.852,
    stronglyAgree: 13.889,
  };

  // Likelihood Others - Digital Files
  const DF_FF_L_LikO = {
    stronglyDisagree: 1.8519,
    disagree: 0,
    somewhatDisagree: 5.5556,
    neutral: 8.3333,
    somewhatAgree: 23.148,
    agree: 38.889,
    stronglyAgree: 22.222,
  };

  const DF_FF_D_LikO = {
    stronglyDisagree: 0,
    disagree: 2.7778,
    somewhatDisagree: 0.9259,
    neutral: 8.3333,
    somewhatAgree: 16.667,
    agree: 44.444,
    stronglyAgree: 26.852,
  };

  // General

  const PrivacyImportant = {
    stronglyDisagree: 0,
    disagree: 0,
    somewhatDisagree: 1.8519,
    neutral: 0,
    somewhatAgree: 16.6666,
    agree: 39.8148,
    stronglyAgree: 41.6667,
  };

  const PrivacyEffort = {
    stronglyDisagree: 0,
    disagree: 3.7037,
    somewhatDisagree: 7.4074,
    neutral: 15.7407,
    somewhatAgree: 41.6667,
    agree: 25.0,
    stronglyAgree: 6.4815,
  };

  const PrivacyDoMore = {
    stronglyDisagree: 0.9259,
    disagree: 0.9259,
    somewhatDisagree: 3.7037,
    neutral: 10.1852,
    somewhatAgree: 30.5556,
    agree: 27.7778,
    stronglyAgree: 25.9259,
  };

  const DeathPrivacyImportant = {
    stronglyDisagree: 2.7778,
    disagree: 4.6296,
    somewhatDisagree: 8.3333,
    neutral: 17.5926,
    somewhatAgree: 30.5556,
    agree: 21.2963,
    stronglyAgree: 14.8148,
  };

  const DeathPrivacyEffort = {
    stronglyDisagree: 22.2222,
    disagree: 36.1111,
    somewhatDisagree: 24.0741,
    neutral: 11.1111,
    somewhatAgree: 4.6296,
    agree: 1.8519,
    stronglyAgree: 0,
  };

  const DeathPrivacyDoMore = {
    stronglyDisagree: 5.5556,
    disagree: 2.7778,
    somewhatDisagree: 5.5556,
    neutral: 23.1481,
    somewhatAgree: 20.3704,
    agree: 25.9259,
    stronglyAgree: 16.6667,
  };

  return (
    <main className="main">
      <ChartCard>
        <h1>Scenario Responses: "The access described is appropriate"</h1>
        <Key />
        <h2>
          A friend/family member accesses digital files without permission
        </h2>
        <Likert blockValues={DF_FF_L_App} label="During life" />
        <Likert blockValues={DF_FF_D_App} label="After death" />
        <h2>
          A friend/family member accesses location data without permission
        </h2>
        <Likert blockValues={LD_FF_L_App} label="During life" />
        <Likert blockValues={LD_FF_D_App} label="After death" />
        <h2>
          A friend/family member accesses private messages without permission
        </h2>
        <Likert blockValues={PM_FF_L_App} label="During life" />
        <Likert blockValues={PM_FF_D_App} label="After death" />

        <h2>
          A company/organisation accesses digital files without permission
        </h2>
        <Likert blockValues={DF_CO_L_App} label="During life" />
        <Likert blockValues={DF_CO_D_App} label="After death" />
        <h2>
          A company/organisation accesses location data without permission
        </h2>
        <Likert blockValues={LD_CO_L_App} label="During life" />
        <Likert blockValues={LD_CO_D_App} label="After death" />
        <h2>
          A company/organisation accesses private messages without permission
        </h2>
        <Likert blockValues={PM_CO_L_App} label="During life" />
        <Likert blockValues={PM_CO_D_App} label="After death" />
      </ChartCard>
      <ChartCard>
        <h1>
          Scenario Responses: "I would give permission for this information
          access, if asked"
        </h1>
        <Key />
        <h2>A friend/family member to access digital files</h2>
        <Likert blockValues={DF_FF_L_Per} label="During life" />
        <Likert blockValues={DF_FF_D_Per} label="After death" />
        <h2>A friend/family member to access location data</h2>
        <Likert blockValues={LD_FF_L_Per} label="During life" />
        <Likert blockValues={LD_FF_D_Per} label="After death" />

        <h2>A friend/family member to access private messages</h2>
        <Likert blockValues={PM_FF_L_Per} label="During life" />
        <Likert blockValues={PM_FF_D_Per} label="After death" />

        <h2>A company/organisation to access digital files</h2>
        <Likert blockValues={DF_CO_L_Per} label="During life" />
        <Likert blockValues={DF_CO_D_Per} label="After death" />
        <h2>A company/organisation to access location data</h2>
        <Likert blockValues={LD_CO_L_Per} label="During life" />
        <Likert blockValues={LD_CO_D_Per} label="After death" />

        <h2>A company/organisation to access private messages</h2>
        <Likert blockValues={PM_CO_L_Per} label="During life" />
        <Likert blockValues={PM_CO_D_Per} label="After death" />
      </ChartCard>
      <ChartCard>
        <h1>Scenario Responses: "This scenario is likely to happen..."</h1>
        <Key />
        <h2>
          "...to some people" - A friend/family member accesses digital files
        </h2>
        <Likert blockValues={DF_FF_L_LikO} label="During life" />
        <Likert blockValues={DF_FF_D_LikO} label="After death" />
        <h2>"...to me" - A friend/family member accesses digital files</h2>
        <Likert blockValues={DF_FF_L_LikS} label="During life" />
        <Likert blockValues={DF_FF_D_LikS} label="After death" />
        {/* 
        <h2>A friend/family member to access private messages</h2>
        <Likert blockValues={PM_FF_L_Per} label="During life" />
        <Likert blockValues={PM_FF_D_Per} label="After death" />

        <h2>A company/organisation to access digital files</h2>
        <Likert blockValues={DF_CO_L_Per} label="During life" />
        <Likert blockValues={DF_CO_D_Per} label="After death" />
        <h2>A company/organisation to access location data</h2>
        <Likert blockValues={LD_CO_L_Per} label="During life" />
        <Likert blockValues={LD_CO_D_Per} label="After death" />

        <h2>A company/organisation to access private messages</h2>
        <Likert blockValues={PM_CO_L_Per} label="During life" />
        <Likert blockValues={PM_CO_D_Per} label="After death" /> */}
      </ChartCard>
      <ChartCard>
        <h1>Self-reported privacy values</h1>
        <Key />
        <h2>Privacy is important to me </h2>
        <Likert blockValues={PrivacyImportant} label="" />

        <h2>I spend a lot of effort maintaining my privacy </h2>
        <Likert blockValues={PrivacyEffort} label="" />

        <h2>I should do more to protect my privacy </h2>
        <Likert blockValues={PrivacyDoMore} label="" />

        <h2>My privacy after I have died is important to me</h2>
        <Likert blockValues={DeathPrivacyImportant} label="" />

        <h2>
          I spend a lot of effort making plans to protect my privacy after I
          have died
        </h2>
        <Likert blockValues={DeathPrivacyEffort} label="" />

        <h2>
          I should make better plans to protect my privacy after I have died
        </h2>
        <Likert blockValues={DeathPrivacyDoMore} label="" />
      </ChartCard>
    </main>
  );
}
