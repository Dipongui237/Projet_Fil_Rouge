import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

import { PageProps as InertiaPageProps } from '@inertiajs/core';

interface User {
  id: number;
  name?: string;
  email?: string;
  role?: string;
}

 

import { PageProps as InertiaPageProps } from '@inertiajs/core';

interface Flash {
  success?: string;
  error?: string;
}

interface Agency {
  id: number;
  nom: string;
  localisation: string;
  logo?: string;
}

interface Trip {
  id: number;
  agence_id: number;
  ville_depart: string;
  ville_arrivee: string;
  heure_depart: string;
  prix: number;
  image?: string;
}
import { PageProps as InertiaPageProps } from '@inertiajs/core';

interface User {
  id: number;
  name?: string;
  email?: string;
  role?: string;
}

interface Auth {
  user: User | null;
}

interface Flash {
  success?: string;
  error?: string;
}

interface Agency {
  id: number;
  name: string; // Supposé basé sur Details.tsx, à confirmer si c'est 'nom'
  localisation: string;
  logo?: string;
}

interface Trip {
  id: number;
  agency_id: number;
  departure: string;
  destination: string;
  departure_time: string;
  logo?: string;
}

interface Seat {
    id: number;
    trip_id: number;
    seat_number: string;
    status: 'available' | 'reserved';
  }

interface Plan {
  id: number;
  trip_id: number;
  name: string;
  description: string;
  price: number;
  is_vip: boolean;
  image?: string;
}

interface Seat {
  id: number;
  trip_id: number;
  seat_number: string;
  status: 'available' | 'reserved';
}

interface Reservation {
  agency: Agency;
  trip: Trip;
  plan: Plan;
  passenger_name: string;
  passenger_email: string;
  passenger_phone: string;
  passengers: number;
  seat_number?: string;
}

interface PageProps extends InertiaPageProps {
  auth: Auth;
  errors: Record<string, string>;
  flash?: Flash;
  agencies?: Agency[];
  trips?: Trip[];
  plans?: Plan[];
  seats?: Seat[];
  agency?: Agency;
  trip?: Trip;
  plan?: Plan;
  agencyId?: number;
  tripId?: number;
  planId?: number;
  passenger_name?: string;
  passenger_email?: string;
  passenger_phone?: string;
  passengers?: number;
  seat_number?: string;
  reservation?: Reservation;
  url?: string;
  [key: string]: any;
}

declare module '@inertiajs/core' {
  interface PageProps extends PageProps {}
}

import { PageProps as InertiaPageProps } from '@inertiajs/core';

interface InertiaUser {
  id: number;
  name?: string;
  email?: string;
  role?: string;
}

interface Auth {
  user: InertiaUser | null;
}

interface Flash {
  success?: string;
  error?: string;
}

interface Agency {
  id: number;
  name: string; // À confirmer si 'nom' dans la migration
  localisation: string;
  logo?: string;
}

interface Trip {
  id: number;
  agency_id: number;
  departure: string;
  destination: string;
  departure_time: string;
  logo?: string;
}

interface Plan {
  id: number;
  trip_id: number;
  name: string;
  description: string;
  price: number;
  is_vip: boolean;
}

interface Seat {
  id: number;
  trip_id: number;
  seat_number: string;
  status: 'available' | 'reserved';
}

interface Reservation {
  agency: Agency;
  trip: Trip;
  plan: Plan;
  passenger_name: string;
  passenger_email: string;
  passenger_phone: string;
  passengers: number;
  seat_number?: string;
}

interface PageProps extends InertiaPageProps {
  auth: Auth;
  errors: Record<string, string>;
  flash?: Flash;
  agencies?: Agency[];
  trips?: Trip[];
  plans?: Plan[];
  seats?: Seat[];
  agency?: Agency;
  trip?: Trip;
  plan?: Plan;
  agencyId?: number;
  tripId?: number;
  planId?: number;
  passenger_name?: string;
  passenger_email?: string;
  passenger_phone?: string;
  passengers?: number;
  seat_number?: string;
  reservation?: Reservation;
  url?: string;
  [key: string]: any;
}

declare module '@inertiajs/core' {
  interface PageProps extends PageProps {}
}
import { PageProps as InertiaPageProps } from '@inertiajs/core';

interface InertiaUser {
  id: number;
  name?: string;
  email?: string;
  role?: string;
}

interface Auth {
  user: InertiaUser | null;
}

interface Flash {
  success?: string;
  error?: string;
}

interface Agency {
  id: number;
  name: string;
  Address: string;
  logo?: string;
}

interface Trip {
  id: number;
  agency_id: number;
  departure: string;
  destination: string;
  departure_time: string;
  logo?: string;
}

interface Plan {
  id: number;
  trip_id: number;
  name: string;
  description: string;
  price: number;
  is_vip: boolean;
}

interface Seat {
  id: number;
  trip_id: number;
  seat_number: string;
  status: 'available' | 'reserved';
}

interface Reservation {
  agency: Agency;
  trip: Trip;
  plan: Plan;
  passenger_name: string;
  passenger_email: string;
  passenger_phone: string;
  passengers: number;
  seat_number?: string;
}

interface PageProps extends InertiaPageProps {
  auth: Auth;
  errors: Record<string, string>;
  flash?: Flash;
  agencies?: Agency[];
  trips?: Trip[];
  plans?: Plan[];
  seats?: Seat[];
  agency?: Agency;
  trip?: Trip;
  plan?: Plan;
  agencyId?: number;
  tripId?: number;
  planId?: number;
  passenger_name?: string;
  passenger_email?: string;
  passenger_phone?: string;
  passengers?: number;
  seat_number?: string;
  reservation?: Reservation;
  url?: string;
  [key: string]: any;
}

declare module '@inertiajs/core' {
  interface PageProps extends PageProps {}
}

export interface PageProps {
    auth: {
      user: {
        id: number;
        name: string;
        email: string;
        role?: string;
      } | null;
    };
    errors: Record<string, string>;
    [key: string]: any;
  }