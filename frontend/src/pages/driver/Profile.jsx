import { useEffect, useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaCar,
  FaCheckCircle,
} from "react-icons/fa";

import {
  getProfile,
  updateProfile,
} from "../../api/profile";

function DriverProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

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

      await updateProfile(profile);

      alert("Profile updated successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to update profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">

      <h1 className="text-3xl font-bold">
        Driver Profile
      </h1>

      {/* Personal Information */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-semibold">
          Personal Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <FaUser />
              First Name
            </label>

            <input
              name="first_name"
              value={profile.first_name || ""}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <FaUser />
              Last Name
            </label>

            <input
              name="last_name"
              value={profile.last_name || ""}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <FaPhone />
              Phone Number
            </label>

            <input
              name="phone_number"
              value={profile.phone_number || ""}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <FaEnvelope />
              Email
            </label>

            <input
              value={profile.email}
              disabled
              className="w-full rounded-lg border bg-gray-100 p-3"
            />
          </div>

        </div>

      </div>

      {/* Driver Information */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-semibold">
          Driver Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <FaIdCard />
              Driver License
            </label>

            <input
              value={profile.driver_license_number || ""}
              disabled
              className="w-full rounded-lg border bg-gray-100 p-3"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <FaCheckCircle />
              Availability
            </label>

            <input
              value={profile.availability_status || ""}
              disabled
              className="w-full rounded-lg border bg-gray-100 p-3"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              Verification Status
            </label>

            <input
              value={
                profile.is_verified
                  ? "Verified"
                  : "Pending"
              }
              disabled
              className="w-full rounded-lg border bg-gray-100 p-3"
            />
          </div>

        </div>

      </div>

      {/* Vehicle */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-semibold">
          Vehicle
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <FaCar />
              Vehicle Type
            </label>

            <input
              value={profile.vehicle_type || ""}
              disabled
              className="w-full rounded-lg border bg-gray-100 p-3"
            />
          </div>

          <div>
            <label className="mb-2 font-medium">
              Number Plate
            </label>

            <input
              value={profile.vehicle_number_plate || ""}
              disabled
              className="w-full rounded-lg border bg-gray-100 p-3"
            />
          </div>

          <div>
            <label className="mb-2 font-medium">
              Vehicle Color
            </label>

            <input
              value={profile.vehicle_color || ""}
              disabled
              className="w-full rounded-lg border bg-gray-100 p-3"
            />
          </div>

        </div>

      </div>

      <div className="flex justify-end">

        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

      </div>

    </div>
  );
}

export default DriverProfile;