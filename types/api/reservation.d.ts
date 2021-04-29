import { Geo } from "./geo";

export namespace Reservation {
  interface Link {
    href: string;
  }

  interface TemplatedLink extends Link {
    templated: boolean;
  }

  interface HotelReservationResult {
    message: null;
    status: number;
    result: HotelReservation;
  }

  interface HotelReservation {
    _links: HotelReservationLinks;
    id: string;
    state: string;
    transaction_key: string;
    check_in: string;
    check_out: string;
    created_at: string;
    exceeds_included_guests: boolean;
    updated_at: string;
    first_name: string;
    last_name: string;
    booking_number: string;
    guest_first_name: string;
    guest_last_name: string;
    guest_special_requests: string;
    surcharge_total: number;
    surcharge_currency: string;
    surcharge_paid_direct_to_vendor: boolean;
    number_of_adults: number;
    number_of_children: number;
    number_of_infants: number;
    surcharge_cost_total: number;
    channel_managed: boolean;
    channel_manager: string;
    room_type: RoomTypeMemo;
    property: PropertyMemo;
  }

  interface HotelReservationLinks {
    self: Link;
    room_type: Link;
    property: Link;
    orders: Link;
    parent: Link;
  }

  interface PropertyMemo {
    name: string;
  }

  interface RoomTypeMemo {
    name: string;
  }

  interface RoomTypeResult {
    message: null;
    status: number;
    result: RoomType;
  }

  interface RoomType {
    _links: RoomTypeLinks;
    name: string;
    id: string;
    property_id: string;
    availability_threshold: null;
    size_sqm: number;
    description: string;
    availability: Availability;
    capacities: AdultChildInfant[];
    included_guests: AdultChildInfant[];
    amenities: Amenity[];
    images: Image[];
    additional_guest_amount_description: string;
    max_occupancy: number;
    max_adult_occupancy: number;
    max_child_occupancy: number;
    max_infant_occupancy: number;
    max_included_guests: number;
    max_adult_included_guests: number;
    max_child_included_guests: number;
    max_infant_included_guests: number;
    room_rates: RoomRate[];
    room_inclusions: string | null;
  }

  interface RoomTypeLinks {
    self: Link;
    property: Link;
    availability: TemplatedLink;
    enquiry: TemplatedLink;
  }

  interface Surcharges {
    currency: string;
    adult_cost: number;
    child_cost: number;
    infant_cost: number;
    adult_amount: number;
    child_amount: number;
    infant_amount: number;
  }

  interface RoomRate {
    _links: RoomRateLinks;
    id: string;
    rate_plan: RatePlan;
    included_guests: AdultChildInfant[];
    capacities: AdultChildInfant[];
    extra_guest_surcharges: Surcharges[];
  }

  interface RoomRateLinks {
    self: Link;
    surcharges: Link;
  }

  type CancellationPolicy =
    | "refundable"
    | "non-refundable"
    | "prior-to-check-in-one-day"
    | "prior-to-check-in-two-days"
    | "prior-to-check-in-seven-days"
    | "prior-to-check-in-fourteen-days"
    | "prior-to-check-in-twenty-one-days"
    | "prior-to-check-in-thirty-one-days"
    | "prior-to-check-in-sixty-days";

  interface RatePlan {
    _links: RatePlanLinks;
    id: string;
    id_salesforce_external: string;
    name: string;
    default_plan: boolean;
    cancellation_policy: CancellationPolicy;
    cancellation_policy_detail?: Array<string>;
  }

  interface RatePlanLinks {
    self: Link;
  }

  interface Amenity {
    id: number;
    name: string;
    built_in: boolean;
  }

  interface Availability {
    total: number;
    left: number;
  }

  interface AdultChildInfant {
    _links: AdultChildInfantLinks;
    id: string;
    room_type_id: string;
    adults: number;
    children: number;
    infants: number;
  }

  interface AdultChildInfantLinks {
    self: Link;
  }

  interface Image {
    id: string;
    id_cloudinary_external: string;
    room_type_id: string;
    order: number;
    created_at: string;
    updated_at: string;
  }

  interface PropertyResult {
    message: null;
    status: number;
    result: Property;
  }

  interface Property {
    _links: PropertyLinks;
    room_types_count: number;
    reviews_count: number;
    name: string;
    has_availability: boolean;
    room_types: RoomType[];
    reviews: Review[];
    id: string;
    address: string;
    longitude: number;
    latitude: number;
    id_salesforce_external: string;
    logo_id_cloudinary_external: string;
    location_heading: string;
    location_subheading: string;
    children_policy: string;
    hotel_code: null;
    channel_managed: boolean;
    channel_manager: string;
    siteminder_channel_region: string;
    geo_data: Geo.Data;
    max_child_age: number | null;
    max_infant_age: number | null;
    timezone: string;
    timezone_offset: number;
    taxes_and_fees_content?: string;
  }

  interface PropertyLinks {
    room_type: TemplatedLink;
    self: Link;
  }

  interface Review {
    id: string;
    content: string;
    source: string;
  }
}
