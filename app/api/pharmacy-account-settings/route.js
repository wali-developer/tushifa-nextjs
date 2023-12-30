import startDbConnection from "@/libs/db";
import PharmacyModel from "@/models/pharmacyModel";
import UserModal from "@/models/userModel";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  try {
    await startDbConnection();

    const { userId, name, email, currentPassword, newPassword, confirmPassword } =
      await req.json();

    const user = await UserModal.findById(userId);
    const pharmacy = await PharmacyModel.findById(user?.pharmacyId);

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // If a current password is provided, check if it matches the stored hashed password
    if (currentPassword) {
      const isPasswordValid = await user.comparePassword(currentPassword);

      if (!isPasswordValid) {
        return NextResponse.json(
          { success: false, message: "Incorrect current password" },
          { status: 400 }
        );
      }
    }

    // Update user information
    user.name = name || user.name;
    user.email = email || user.email;
    pharmacy.name = name || user.name;
    pharmacy.email = email || user.email;

    if (newPassword) {
      if (newPassword !== confirmPassword) {
        return NextResponse.json(
          { success: false, message: "New password and confirm password do not match" },
          { status: 400 }
        );
      }

      user.password = newPassword;
    }

    await user.save();
    await pharmacy.save();

    return NextResponse.json({
      success: true,
      message: "Account settings updated successfully",
      user: user,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
