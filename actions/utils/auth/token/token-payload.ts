export interface TokenPayload {
  userId: number;
  tokenId?: number; // Reference to refresh token in DB
}
