import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProfileSettingForm from "@/components/admin/settings/ProfileSettingForm";
import API from "@/utils/api";
import { getServerSession } from "next-auth";
import React from "react";

const getUser = async (id) => {
  try {
    const { data } = await API.get(`/auth/users/${id}`);
    return data?.user;
  } catch (error) {
    console.log(error);
  }
};

const Settings = async () => {
  let user = null;
  const session = await getServerSession(authOptions);
  const response = await getUser(session?.user?.id);
  user = response;

  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="doctorino_settings main_container">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                  <h4 className="text-primary">Settings</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card shadow mb-4">
                  <div className="card-header">
                    <h4 className="card-title">Profile Settings</h4>
                  </div>
                  <div className="card-body">
                    <ProfileSettingForm user={user} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
