import { CommitmentLevel } from "@triton-one/yellowstone-grpc";

export const enum BotCaption {
  // Warning Captions for developer
  InvaildBotToken = `⚠ Invalid Bot Token Error ⚠`,
  InvaildChannelId = `⚠ Invalid Channel Id Error ⚠`,
  InvaildRPC_URL = `⚠ Invalid RPC_URL Error ⚠`,

}

export const enum Ixn {
  WithDraw = "Program log: Instruction: Withdraw",
  Initiate = "initialize2",
  Burn = "Program log: Instruction: Burn"
}

export const SUB_TXN = {
  slots: {
    slots: {}
  },
  accounts: {},
  transactions: {
    raydiumPoolv4: {
      vote: false,
      failed: false,
      accountInclude: [
        "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8" //You can enter any Solana address, wallet, token, program etc.
      ]
    }
  },
  blocks: {},
  blocksMeta: {},
  accountsDataSlice: [],
  commitment: CommitmentLevel.CONFIRMED
}

export const END_TXN = {
  slots: {},
  accounts: {},
  transactions: {},
  blocks: {},
  blocksMeta: {},
  accountsDataSlice: []
}