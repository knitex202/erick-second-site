import React from "react";
import { campaignGroups } from "../data";

function Campaigns() {
  const coverIndexes = [0, 1, 6, 0];
  const featuredCampaigns = campaignGroups.map((campaign, index) => ({
    ...campaign,
    cover: campaign.images[coverIndexes[index]],
  }));

  return (
    <main className="screen-page">
      <section className="campaign-screen">
        <div className="page-intro">
          <h1 className="page-heading">Campaigns</h1>
          <p>
            A selection of work with leading brands and creative partners.
          </p>
        </div>

        <div className="campaign-card-row">
          {featuredCampaigns.map((campaign) => (
            <article className="campaign-card" key={campaign.name}>
              <img
                src={campaign.cover.picture}
                alt={campaign.cover.alt}
                className="campaign-card-image"
              />
              <div className="campaign-card-gradient" />
              <img
                src={campaign.logo}
                alt={campaign.logoAlt}
                className="campaign-card-logo"
              />
              <h2 className="campaign-card-title">{campaign.name}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Campaigns;
