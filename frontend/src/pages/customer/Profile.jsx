import { useEffect, useState } from "react";

import {
  getProfile,
  updateProfile,
  changePassword,
} from "../../api/profile";

function Profile() {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [passwordLoading, setPasswordLoading] =
    useState(false);

  const [passwordData, setPasswordData] =
    useState({
      current_password: "",
      new_password: "",
    });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const data = await updateProfile(profile);

      setProfile(data);

      alert("Profile updated successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to update profile.");
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async () => {
    try {
      setPasswordLoading(true);

      await changePassword(passwordData);

      alert("Password changed successfully.");

      setPasswordData({
        current_password: "",
        new_password: "",
      });

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.detail ||
        "Unable to change password."
      );
    } finally {
      setPasswordLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">

      <h1 className="text-3xl font-bold">
        My Profile
      </h1>

      {/* Personal Information */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-semibold">
          Personal Information
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <label>First Name</label>

            <input
              className="mt-2 w-full rounded-lg border p-3"
              name="first_name"
              value={profile.first_name || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Last Name</label>

            <input
              className="mt-2 w-full rounded-lg border p-3"
              name="last_name"
              value={profile.last_name || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email</label>

            <input
              disabled
              className="mt-2 w-full rounded-lg border bg-gray-100 p-3"
              value={profile.email}
            />
          </div>

          <div>
            <label>Phone Number</label>

            <input
              className="mt-2 w-full rounded-lg border p-3"
              name="phone_number"
              value={profile.phone_number || ""}
              onChange={handleChange}
            />
          </div>

        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

      </div>

      {/* Account */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-semibold">
          Account Information
        </h2>

        <div className="space-y-3">

          <p>
            <strong>Role:</strong> {profile.role}
          </p>

          <p>
            <strong>Member Since:</strong>{" "}
            {new Date(
              profile.created_at
            ).toLocaleDateString()}
          </p>

        </div>

      </div>

      {/* Change Password */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-semibold">
          Change Password
        </h2>

        <input
          type="password"
          placeholder="Current Password"
          className="mb-4 w-full rounded-lg border p-3"
          value={passwordData.current_password}
          onChange={(e) =>
            setPasswordData({
              ...passwordData,
              current_password: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-lg border p-3"
          value={passwordData.new_password}
          onChange={(e) =>
            setPasswordData({
              ...passwordData,
              new_password: e.target.value,
            })
          }
        />

        <button
          onClick={handlePasswordChange}
          disabled={passwordLoading}
          className="mt-6 rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          {passwordLoading
            ? "Updating..."
            : "Change Password"}
        </button>

      </div>

    </div>
  );
}

export default Profile;