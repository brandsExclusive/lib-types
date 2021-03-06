export namespace Order {
  interface Link {
    href: string;
  }

  interface OrderLinks {
    self: Link;
    payments: Link;
    refunds: Link;
    status: Link;
  }

  interface OrderResult {
    message: null;
    status: number;
    result: Order;
    fk_customer_id: string;
  }

  interface Order {
    _links: OrderLinks;
    id: string;
    checksum: string;
    number: string;
    transaction_key: string;
    currency_code: string;
    region_code: string;
    status: string;
    display_status: string;
    created_at: string;
    updated_at: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_ad: string;
    utm_adgroup: string;
    utm_term: string;
    device_ip: string | null;
    device_id: string | null;
    platform: string | null;
    origin_url: string;
    le_label: string;
    le_attribution: string;
    brand: string;
    external_order_id: number;
    id_orders: string;
    fk_canceller: null;
    fk_purchaser_id: string;
    fk_customer_id: string;
    fk_changed_by_id: null;
    refund_reason: null;
    refund_comment: string;
    refund_ticket_id: string;
    legacy_id_orders: null;
    customer_email: string;
    customer_membership_code: string;
    customer_membership_number: number | null;
    customer_given_name: string;
    customer_surname: string;
    customer_full_name: string;
    customer_phone_prefix: string;
    customer_phone: string;
    customer_qff: null;
    customer_qff_last_name: null;
    qff_enabled: boolean;
    items: AccommodationItem[];
    accommodation_items: AccommodationItem[];
    addon_items: AddonItem[];
    flight_items: FlightItem[];
    gift_card_items: GiftCardItem[];
    membership_items: MembershipItem[];
    insurance_items: InsuranceItem[];
    partnerships: Partnerships;
    has_addons: boolean;
    has_flight: boolean;
    has_gift_card: boolean;
    has_membership: boolean;
    has_insurance: boolean;
    total: number;
    user_agent: string | null;
  }

  type AnyItem =
    | AddonItem
    | FlightItem
    | GiftCardItem
    | MembershipItem
    | InsuranceItem
    | AccommodationItem;

  interface ItemLinks {
    order: Link;
  }

  interface Item {
    _links: ItemLinks;
    id: string;
    status: string;
    type: string;
    total: string;
    price: number;
    value: number;
    fk_order_id: string;
  }

  interface AddonItemLinks extends ItemLinks {
    addon: Link;
  }

  interface AddonItem extends Item {
    _links: AddonItemLinks;
    salesforce_id: string;
    offer_salesforce_id: string;
    offer_package_salesforce_id: string;
    addon_parent_package_salesforce_id: string;
    fk_opportunity_salesforce_id: string;
    categories: string[];
    item?: AccommodationItem;
  }

  interface FlightItemLinks extends ItemLinks {
    flight_details: Link;
    flight_reservation: Link;
  }

  interface FlightItem extends Item {
    _links: FlightItemLinks;
  }

  interface GiftCardItemLinks extends ItemLinks {
    gift_card: Link;
  }

  interface GiftCardItem extends Item {
    _links: GiftCardItemLinks;
  }

  interface MembershipItem extends Item {
    code: string;
    number: number;
  }

  interface InsuranceItemLinks extends ItemLinks {
    subscription: Link;
    pds: Link;
  }

  interface InsuranceItem extends Item {
    _links: InsuranceItemLinks;
  }

  interface AccommodationItemLinks extends ItemLinks {
    self: Link;
    voucher: Link;
    reservation?: Link;
    downgraded_from?: Link;
    offer?: Link;
  }

  interface AccommodationItem extends Item {
    _links: AccommodationItemLinks;
    transaction_key: string;
    checksum: string;
    booking_number: string;
    fk_vendor_id: string;
    offer: Offer;
    offer_package: OfferPackage;
    reservation_type: string;
    reservation_made: boolean;
    created_at: string;
    updated_at: string;
    customer_can_change_dates: boolean;
    has_reservation_history: boolean;
    reservation: Reservation;
    number_of_nights: number;
    extra_nights: number;
    fk_offer: string;
    fk_package: string;
    id_items: string;
    name: string;
    id_salesforce_external: string;
    cvp_bonus_points: number;
    is_downgraded: boolean;
    fk_downgraded_from_id: null | string;
  }

  interface Offer {
    id_salesforce_external: string;
    slug: string;
    name: string;
    location: string;
    booking_type: string;
    book_by_date: string;
    type: string;
    image: Image;
    partnerships: OfferPartnership[];
    tour_flight_details_required: boolean;
    enable_customer_portal_date_change: boolean;
  }

  interface Image {
    id_cloudinary_external: string;
  }

  interface OfferPartnership {
    code: string;
    prefix: string;
    upsell_text: null;
  }

  interface OfferUpgradePackageMembership {
    id_salesforce_external: string;
    max_extra_nights: number;
    nightly_price: number;
    nightly_value: number;
    price: number;
    value: number;
  }

  interface OfferPackageMembership {
    code: string;
    upgrade_package?: OfferUpgradePackageMembership;
  }

  interface OfferPackage {
    id_salesforce_external: string;
    fk_property_id: string;
    fk_room_type_id: string;
    name: string;
    description: string;
    price: number;
    value: number;
    cvp_bonus_points: number;
    number_of_nights: number;
    cost_price: number;
    cost_currency: string;
    memberships: Array<OfferPackageMembership>;
  }

  interface Reservation {
    id: string;
    state: string;
    check_in: string;
    check_out: string;
    last_name: string;
    surcharge: number;
    first_name: string;
    guest_last_name: string;
    transaction_key: string;
    guest_first_name: string;
    number_of_adults: number;
    number_of_infants: number;
    number_of_children: number;
    surcharge_cost_total: number;
    guest_special_requests: string;
    surcharge_paid_direct_to_vendor: boolean;
  }

  interface Partnerships {
    cvp?: Partnership;
  }

  interface Partnership {
    account_id: string;
    first_name: string;
    last_name: string;
  }

  interface Refund {
    item_id: string;
    amount: string;
    refund_method: string;
    created_at: string;
    refund_fee: string;
    accounting_amount: string;
  }

  interface RefundResult {
    message: string;
    status: number;
    result: Refund[];
  }
}
