import { useState } from "react";
import { Button } from "./components/ui/button";
import { API_GATEWAY_URL } from "./constants/global-constants";
import axios from "axios";
import { fetchAuthSession } from "aws-amplify/auth";
import LoadingSpinner from "./components/loader/loader-icon";

const Endpoint = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState<string>();
  const [apiBody, setApiBody] = useState<any>();

  const apiSubmitDirectDebit = async () => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const apiUrl = `${API_GATEWAY_URL}/onboarding/setup-direct-debit`;
    setUrl(apiUrl);

    const body = {
      country_code: "GB",
      currency: "GBP",
      account_details: {
        account_type: "uk",
        account_holder_name: "CAPITAL CLIENTS LTD",
        account_number: "55779911",
        branch_code: "200000",
      },
    };
    setApiBody(body);
    console.log("Api url: ", url, body);
    try {
      const response = await axios.post(apiUrl, body, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: false,
      });
      setData(response.data);
    } catch (error) {
      console.error("Error calling API:", error);
      setData(error?.toString());
    }
  };
  const apiInitializeOnboarding = async () => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const apiUrl = `${API_GATEWAY_URL}/onboarding/initialize`;
    setUrl(apiUrl);
    const data = {
      first_name: "Raihan",
      last_name: "Hridoy",
      email: "raihanhridoy@b.com",
      phone: "+353857342075",
      job_title: "Developer",
    };
    console.log("Api url: ", url, data);

    try {
      const response = await axios.post(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: false,
      });
      setData(response.data);
    } catch (error) {
      console.error("Error calling API:", error);
      setData(error?.toString());
    }
  };
  const apiUpoadAtachment = async () => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const apiUrl = `${API_GATEWAY_URL}/attachment`;
    setUrl(apiUrl);
    const data = {
      entity_id: "user_id",
      entity_type: "user",
      attachment_label: "profil_picture",
      attachment_id: "a1b2c3d4-e567-890f-ghij-klmn12345678",
      file_name: "resume.pdf",
    };
    console.log("Api url: ", apiUrl, data);

    try {
      const response = await axios.post(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: false,
      });
      setData(response.data);
    } catch (error) {
      console.error("Error calling API:", error);
      setData(error?.toString());
    }
  };
  async function apiGetOnboarding() {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const apiUrl = `${API_GATEWAY_URL}/onboarding`;
    setUrl(apiUrl);
    console.log("Api url: ", url);
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: false,
      });
      setData(response.data);
    } catch (error) {
      console.error("Error calling API:", error);
      setData(error?.toString());
    }
  }
  return (
    <div className="bg-background flex h-screen w-full flex-col">
      <div className="mt-4 flex h-full flex-col items-center justify-start">
        <Button
          onClick={async () => {
            setLoading(true);
            await apiSubmitDirectDebit();
            // await apiUpoadAtachment();
            // await apiGetOnboarding();
            // await apiInitializeOnboarding();
            setLoading(false);
          }}
        >
          {loading && <LoadingSpinner />} Call Api End Test Point
        </Button>
        <div className="hide-scrollbar bg-accent mt-4 flex h-[calc(100vh-100px)] w-fit justify-center overflow-auto rounded-2xl p-8">
          <pre className="max-w-[calc(100vw-500px)] overflow-auto whitespace-pre-wrap">
            {JSON.stringify(
              {
                message: "Welcome to the Benchbee Api Endpoint",
                url: url,
                body: apiBody,
                data: data,
              },
              null,
              2,
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Endpoint;
