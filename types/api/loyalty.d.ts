export namespace Loyalty {
  interface PartnershipResult {
    status: number;
    result: Partnership;
  }

  interface PartnershipsResult {
    status: number;
    result: Partnership[];
    count: number;
    total: number;
  }

  interface PartnershipAccountFieldsLabels {
    [key: string]: string;
  }

  interface Partnership {
    accountFields: string[];
    accountFieldsLabels: PartnershipAccountFieldsLabels;
    bonusPointCost: number;
    bonusUnit: string;
    brandName: string;
    code: string;
    color: string;
    confirmationText: string;
    currencyCodes: string[];
    earnOrBurnLabel: string;
    earnOrBurnLabelExtended: string;
    burnOnlyLabel: string;
    burnOnlyLabelExtended: string;
    hasBurn: boolean;
    hasEarn: boolean;
    icon: string;
    iconReversed: string;
    joinUrl: string;
    landingPage: string;
    landingPageLogo: string;
    numberMaxLength: number;
    prefix: string;
    programLogo: string;
    programName: string;
    regionCodes: string[];
    reverseLogo: string;
    rewardConversion: number;
    rewardCurrency: string;
    rewardEarn: number;
    rewardName: string;
    rewardPer: string;
    rewardProgramName: string;
  }

  interface MembershipResult {
    status: number;
    result: Membership;
  }

  interface MembershipsResult {
    status: number;
    result: Membership[];
    count: number;
    total: number;
  }

  interface MembershipPrice {
    price: number;
    regionCode: string;
    currencyCode: string;
  }

  interface MembershipLogo {
    id: string;
    color: string;
  }

  interface Membership {
    code: string;
    shortName: string;
    name: string;
    logos: Array<MembershipLogo>;
    prices: Array<MembershipPrice>;
  }
}
