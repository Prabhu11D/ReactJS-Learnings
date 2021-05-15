import React, { useEffect, useState } from "react";
import Cardless from "./Right/Cardless";
import Button from "./Right/Button";
import Card from "./Right/Card";
import TextField from "./Right/TextField";
import FileUpload from "./Right/FileUpload";
import TextFiledwithLabel from "./Right/TextFiledwithLabel";
import TextArea from "./Right/TextArea";
import ColorPalette from "./Right/ColorPalette";

function Setup() {
  const [requiredDetail, setRequiredDetail] = useState({
    CompanyName: "",
    WebsiteURL: "",
    Domain: "",
    Image: "",
    cmTitle: "",
    cmSubtitle: "",
    cmBody: "",
    welcomeMessage: "",
    waitlist: 0,
    airtableBase: "",
    airtableAPIKey: "",
  });

  const defaultColor = {
    fontColor: "#000",
    backgroundColor: "#fff",
  };
  const [color, setColor] = useState(defaultColor);

  const [colorChanged, setColorChanged] = useState(false);

  useEffect(() => {
    console.log(requiredDetail);
  }, [requiredDetail]);

  function saveDetail(key, value) {
    setRequiredDetail({
      ...requiredDetail,
      [key]: value,
    });
  }

  return (
    <div>
      <Cardless>
        <div className="logout">
          <a href="#">Logout</a>
        </div>
        <div className="setup-header">
          <p>Setup</p>
          <div>
            <Button name="PREVIEW" />
            <Button name="SAVE" />
          </div>
        </div>
        <p className="text">Required</p>
      </Cardless>

      <Card title="Company" desc="What's the name of your company?">
        <TextField
          type="text"
          placeholder="Referlist"
          returnBack={(value) => saveDetail("CompanyName", value)}
          required="required"
        />
      </Card>

      <Card
        title="Website URL"
        desc="What's the URL of your website where you'll host your sign-up form?"
      >
        <TextField
          type="text"
          placeholder="http://referlist.co"
          returnBack={(value) => saveDetail("WebsiteURL", value)}
          required="required"
        />
      </Card>

      <Card
        title="Domain"
        desc="Pick a unique domain for your waitlist. This is usually your company name or some variant of it
"
      >
        <TextField
          type="text"
          placeholder="referlist"
          returnBack={(value) => saveDetail("Domain", value)}
          required="required"
        />

        {requiredDetail.Domain !== "" ? (
          <p
            style={{
              color: "#807B7B",
              marginTop: "20px",
            }}
          >
            Your domain will appear in your waitlist page like so:
            referlist.co/joinwaitlist/{requiredDetail.Domain}
            ?email=example@referlist.co
          </p>
        ) : (
          ""
        )}
      </Card>

      <Cardless>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button name="SAVE" />
        </div>
        <p className="text">Optional</p>
      </Cardless>

      <Card
        title="Your logo"
        desc="Upload a square 600x600 pixel logo (optional)"
      >
        <FileUpload saveDetail={saveDetail} imageData={requiredDetail.Image} />
      </Card>

      <Card
        title="Custom Message"
        desc="Include a custom message for users who sign up for your waitlist (optional)"
      >
        <TextFiledwithLabel
          label="Title"
          maxChar={80}
          type="text"
          placeholder="Congrats! You're on the waitlist"
          returnBack={(value) => saveDetail("cmTitle", value)}
          required={false}
        />
        <TextFiledwithLabel
          label="Subtitle"
          maxChar={80}
          type="text"
          placeholder="Want to get access sooner?"
          returnBack={(value) => saveDetail("cmSubtitle", value)}
          required={false}
        />
        <TextArea
          label="Body"
          maxChar={300}
          type="text"
          placeholder="Move up the waitlist by sharing your referral link with your friends. The top 500 will get early access sand a 20% discount on an annual membership"
          returnBack={(value) => saveDetail("cmBody", value)}
          required={false}
        />
      </Card>

      <Card
        title="Custom colors"
        desc="Set a custom background and font color (optional)"
      >
        <div className="color-btn">
          <ColorPalette
            color={color.backgroundColor}
            setColor={(value) =>
              setColor({
                ...color,
                backgroundColor: value,
              })
            }
            isChanged={setColorChanged}
          />
          <p>Background</p>
        </div>

        <div className="color-btn">
          <ColorPalette
            color={color.fontColor}
            setColor={(value) =>
              setColor({
                ...color,
                fontColor: value,
              })
            }
            isChanged={setColorChanged}
          />
          <p>Font</p>
        </div>
        {colorChanged ? (
          <button onClick={() => setColor(defaultColor)}>RESET</button>
        ) : (
          ""
        )}
      </Card>

      <Card
        title="Customize the verification email"
        desc="When someone signs up, we send them a verification email to make sure they're a real human. Add a snippet to customize the message (optional)"
      >
        <TextArea
          label="Custom welcome message"
          maxChar={400}
          type="text"
          placeholder="Hi there! Thanks for signing up for Robinhood. Verify your email to be placed on the list"
          returnBack={(value) => saveDetail("welcomeMessage", value)}
          required={false}
        />
      </Card>

      <Card
        title="Seed your waitlist"
        desc="No one likes an empty waitlist. You want to build FOMO for your launch. You can add a number between 0 and 1000 so that people feel like they're not the only ones excited about your product. This doesn't count towards your export limit"
      >
        <TextField
          type="number"
          placeholder="0"
          maxChar={"1000"}
          returnBack={(value) => saveDetail("waitlist", value)}
          required={false}
        />
      </Card>

      <Cardless>
        <p className="text">Integrations</p>
      </Cardless>

      <Card
        title="Mailchimp"
        desc="Connect your Mailchimp account to send email sign-ups to a Mailchimp list"
      >
        <Button name="CONNECT TO MAILCHIMP" />
      </Card>

      <Card
        title="Airtable"
        desc='Connect your Airtable account. Send email sign-ups to a base with a table named "signups" and a single column named "email"'
      >
        <p className="label">Airtable Base</p>
        <TextField
          type="text"
          placeholder="appXXXXXXXXXXXXXX"
          maxChar={"1000"}
          returnBack={(value) => saveDetail("airtableBase", value)}
          required={false}
        />
        <p className="label" style={{ marginTop: "20px" }}>
          Airtable API Key
        </p>
        <TextField
          type="text"
          placeholder="keyXXXXXXXXXXXXXX"
          maxChar={""}
          returnBack={(value) => saveDetail("airtableAPIKey", value)}
          required={false}
        />
      </Card>

      <Card
        title="API Key"
        desc='Add sign-ups via API. Use this in a header called "api-key" in your requests.'
      >
        <TextField
          type="text"
          placeholder="keyXXXXXXXXXXXXXX"
          maxChar={""}
          returnBack={(value) => saveDetail("airtableAPIKey", value)}
          required={false}
        />
      </Card>

      <Cardless>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "30px",
          }}
        >
          <Button name="SAVE" />
        </div>
      </Cardless>
    </div>
  );
}

export default Setup;
