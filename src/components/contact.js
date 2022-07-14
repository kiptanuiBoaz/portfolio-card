import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Pravash Kumar Behera</h2>
            <img
              src="https://lh3.googleusercontent.com/kcRZ5VqupnulktS_PVkpZVJkr65q4mtMLlJ1xxGebbibqIQegpLmZCohmqUaOCYjnycVW-46G98ImZwekXC3QtS9hqPGaOAijupCMBFWEXJFzGNmKocnms1rfyA9RQLW3ISkfsAZfBFnHoVusc6Tyfo1fq4eJD1yTnbWQbgsnzZta-g3exMIYpdgRA-PfSdXQWKJtfy1X9r17GEc-wUM2jP2L0OTTDIoUqYht0IB5IGFtewNxUYXCvXQ9afgn8qAO9JlzTP_ijlWXN4FZseRro_UK3z1fEsnyt8JeqsTOKVjUQS39S0ARwhrQjEmcCT1LiRNFlAUQgDyI0N0xG9ODl8KtW8So7irbB81t8yxPuVejyv7S35atqem7GJCVyUFVtXFfwSxEZkGS1ASuCsbFGIvVnejs8fmTzXUIxqPcqkJWiQAQ_Qls9FmJJ1JQ4valNUZQfvQABsa-BedbKRlRf6JRu8UT23H-p09wBgwNCmzJY0-V6I2rCm2jZiD89kQ-Utuk5aiEg3Lql7jcOu6xEnv_tYg3PtzMBt8m6dZTxmW9EuXYAKRgow3dx0Jiej3Gryn78imiTGxa2oEJLbltJMWWDTqL9UC42NO-rL0YxLNfKFykxXBAJFVxKi5F97CTc3gYf3R_KlQR9bq2P2Tn902=w631-h630-no"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+91) 965-888-4153
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "29.5px", fontFamily: "Anton" }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    pravashbehera2@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
