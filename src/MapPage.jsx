import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useParams } from "react-router-dom";
import { services, providers } from "./data";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTranslation } from "react-i18next";

mapboxgl.accessToken = "pk.eyJ1IjoiY2h1bGExIiwiYSI6ImNtY2VoMWwzYTB1emIybm9kenJkNmljb2UifQ.7O4AVWgv7lWai9t5_lnDIQ";

function MapPage() {
  const { serviceId } = useParams();
  const { t } = useTranslation();
  const mapContainer = useRef(null);
  const map = useRef(null);

  const service = services.find((s) => s.id === parseInt(serviceId));

  // 🚨 Return early if no valid service
  if (!service) {
    return (
      <div className="text-center text-red-600 mt-10 text-xl">
        Invalid service ID.
      </div>
    );
  }

  const filteredProviders = providers.filter((p) =>
    p.services.includes(service.name)
  );

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [103.7414, 1.4927],
        zoom: 13,
      });

      map.current.addControl(new mapboxgl.NavigationControl());

      filteredProviders.forEach((provider) => {
        new mapboxgl.Marker()
          .setLngLat([provider.longitude, provider.latitude])
          .setPopup(
            new mapboxgl.Popup().setHTML(`
              <strong>${provider.name}</strong><br/>
              ${provider.description}
            `)
          )
          .addTo(map.current);
      });
    }
  }, [filteredProviders]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        {t(service?.nameKey)} {t("map.providers")}
      </h2>
      <div
        ref={mapContainer}
        className="rounded-lg shadow-lg"
        style={{ height: "500px", width: "80%" }}
      />
    </div>
  );
}

export default MapPage;
