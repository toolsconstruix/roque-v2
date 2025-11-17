import { useEffect } from "react";

interface LeadFormProps {
  source?: string;
  defaultService?: string;
}

export function LeadForm({ source, defaultService }: LeadFormProps) {
  useEffect(() => {
    // Embed script for LeadConnector form, only once
    if (document.getElementById("leadconnector-form-embed")) return;

    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.id = "leadconnector-form-embed";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <div style={{ width: "100%", minHeight: 936 }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/eeMS0gRwum58bFpQHw0o"
          style={{ width: "100%", height: "100%", border: "none", borderRadius: 10 }}
          id="inline-eeMS0gRwum58bFpQHw0o"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="new_form_v2"
          data-height="936"
          data-layout-iframe-id="inline-eeMS0gRwum58bFpQHw0o"
          data-form-id="eeMS0gRwum58bFpQHw0o"
          title="new_form_v2"
        />
      </div>
    </div>
  );
}
