export type EBPagination = {
  object_count: number;
  page_number: number;
  page_size: number;
  page_count: number;
  has_more_items: boolean;
};

export type EBEventsResponse = {
  pagination: EBPagination;
  events: EBEvent[];
};

export type EBEvent = {
  id: string;
  name: {
    text: string;
    html: string;
  };
  description: {
    text: string;
    html: string;
  };
  start: {
    timezone: string;
    utc: string;
    local: string;
  };
  end: {
    timezone: string;
    utc: string;
    local: string;
  };
  url: string;
  vanity_url: string;
  created: string;
  changed: string;
  published: string;
  status: "live" | string;
  currency: "USD" | string;
  online_event: boolean;
  organization_id: string;
  organizer_id: string;
  organizer: {
    name: string;
    description: {
      text: string;
      html: string;
    };
    long_description: {
      text: string;
      html: string;
    };
    logo_id: null;
    logo: {
      id: string;
      url: string;
      crop_mask: {
        top_left: {
          y: number;
          x: number;
        };
        width: number;
        height: number;
      };
      original: {
        url: string;
        width: number;
        height: number;
      };
      aspect_ratio: string;
      edge_color: string;
      edge_color_set: boolean;
    };
    resource_uri: string;
    id: string;
    url: string;
    num_past_events: 5;
    num_future_events: 1;
    twitter: string;
    facebook: string;
  };
  logo_id: null;
  logo: {
    id: string;
    url: string;
    crop_mask: {
      top_left: {
        y: number;
        x: number;
      };
      width: number;
      height: number;
    };
    original: {
      url: string;
      width: number;
      height: number;
    };
    aspect_ratio: string;
    edge_color: string;
    edge_color_set: boolean;
  };
  venue: {
    name: string;
    age_restriction: null;
    capacity: number;
    address: {
      address_1: null;
      address_2: null;
      city: null;
      region: null;
      postal_code: null;
      country: null;
      latitude: null;
      longitude: null;
    };
    resource_uri: string;
    id: string;
    latitude: string;
    longitude: string;
  };
  format_id: null;
  format: {
    id: string;
    name: string;
    name_localized: string;
    short_name: "Seminar" | string;
    short_name_localized: "Seminar" | string;
    resource_uri: string;
  };
  category: {
    id: string;
    resource_uri: string;
    name: "Music" | string;
    name_localized: "Music" | string;
    short_name: "Music" | string;
    short_name_localized: "Music" | string;
    subcategories: [
      {
        id: string;
        resource_uri: string;
        name: "Classical" | string;
        parent_category: Record<string, unknown>;
      }
    ];
  };
  subcategory: {
    id: string;
    resource_uri: string;
    name: "Classical" | string;
    parent_category: {
      id: string;
      resource_uri: string;
      name: "Music" | string;
      name_localized: "Music" | string;
      short_name: "Music" | string;
      short_name_localized: "Music" | string;
      subcategories: [Record<string, unknown>];
    };
  };
  music_properties: {
    age_restriction: null;
    presented_by: null;
    door_time: string;
  };
  bookmark_info: {
    bookmarked: boolean;
  };
  ticket_availability: {
    has_available_tickets: boolean;
    minimum_ticket_price: {
      currency: "USD" | string;
      value: number;
      major_value: string;
      display: string;
    };
    maximum_ticket_price: {
      currency: "USD" | string;
      value: number;
      major_value: string;
      display: string;
    };
    is_sold_out: boolean;
    start_sales_date: {
      timezone: string;
      utc: string;
      local: string;
    };
    waitlist_available: boolean;
  };
  listed: boolean;
  shareable: boolean;
  invite_only: boolean;
  show_remaining: boolean;
  password: string;
  capacity: number;
  capacity_is_custom: boolean;
  tx_time_limit: string;
  hide_start_date: boolean;
  hide_end_date: boolean;
  locale: "en_US" | string;
  is_locked: boolean;
  privacy_setting: "unlocked" | "locked";
  is_externally_ticketed: boolean;
  external_ticketing: {
    external_url: string;
    ticketing_provider_name: string;
    is_free: boolean;
    minimum_ticket_price: {
      currency: "USD" | string;
      value: number;
      major_value: string;
      display: string;
    };
    maximum_ticket_price: {
      currency: "USD" | string;
      value: number;
      major_value: string;
      display: string;
    };
    sales_start: string;
    sales_end: string;
  };
  is_series: boolean;
  is_series_parent: boolean;
  series_id: string;
  is_reserved_seating: boolean;
  show_pick_a_seat: boolean;
  show_seatmap_thumbnail: boolean;
  show_colors_in_seatmap_thumbnail: boolean;
  is_free: boolean;
  source: "api";
  version: string;
  resource_uri: string;
  event_sales_status: {
    sales_status: "text";
    start_sales_date: {
      timezone: string;
      utc: string;
      local: string;
    };
  };
  checkout_settings: {
    created: string;
    changed: string;
    country_code: string;
    currency_code: string;
    checkout_method: "paypal" | string;
    offline_settings: [
      {
        payment_method: "CASH" | string;
        instructions: string;
      }
    ];
    user_instrument_vault_id: string;
  };
};
