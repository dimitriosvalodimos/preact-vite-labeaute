export const OpeningHours = () => (
  <div>
    <p style={{ textAlign: "center", padding: "1rem 0" }}>
      Öffnungszeiten für die Behandlungen
    </p>
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
      >
        <p>Montag - Freitag</p>
        <p>Samstag</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
      >
        <p>10:00 - 18:00</p>
        <p>10:00 - 13:00</p>
      </div>
    </div>
    <p style={{ textAlign: "center", padding: "1rem 0" }}>
      Termine für Behandlungen nach Vereinbarung
    </p>
  </div>
);
