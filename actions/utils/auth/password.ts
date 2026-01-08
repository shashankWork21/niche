"use server";

import { randomBytes, scrypt } from "crypto";

export async function hashPassword(password: string) {
  const salt = randomBytes(64).toString("hex");
  const hash = await new Promise<Buffer>((resolve, reject) => {
    scrypt(password, salt, 128, (err, derivedKey) => {
      if (err) reject(err);
      else resolve(derivedKey);
    });
  });
  const result = `${salt}.${hash.toString("hex")}`;
  return result;
}

export async function comparePassword(
  enteredPassword: string,
  passwordHash: string
) {
  const [salt, storedHash] = passwordHash.split(".");
  const hash = await new Promise<Buffer>((resolve, reject) => {
    scrypt(enteredPassword, salt, 128, (err, derivedKey) => {
      if (err) reject(err);
      else resolve(derivedKey);
    });
  });
  return hash.toString("hex") === storedHash;
}
