import React, { useState } from "react";
import { campaignGroups } from "../data";

function Campaigns() {
  const coverIndexes = [0, 1, 6, 0];
  const featuredCampaigns = campaignGroups.map((campaign, index) => ({
    ...campaign,
    cover: campaign.images[coverIndexes[index]],
  }));
  const [selectedCampaign, setSelectedCampaign] = useState(featuredCampaigns[0]);

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
            <button
              type="button"
              className={`campaign-card ${
                selectedCampaign.name === campaign.name ? "campaign-card-active" : ""
              }`}
              key={campaign.name}
              onClick={() => setSelectedCampaign(campaign)}
            >
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
            </button>
          ))}
        </div>

        <section className="campaign-detail" aria-live="polite">
          <div className="campaign-detail-copy">
            <p>{selectedCampaign.name}</p>
            <h2>{selectedCampaign.summary}</h2>
          </div>

          <div className="campaign-detail-grid">
            {selectedCampaign.images.map((image) => (
              <figure key={image.picture}>
                <img src={image.picture} alt={image.alt} />
              </figure>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Campaigns;
