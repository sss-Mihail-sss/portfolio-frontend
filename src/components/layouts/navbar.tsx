'use client';

import {
  BriefcaseBusinessIcon,
  BuildingIcon,
  CarIcon,
  CctvIcon,
  ChartLineIcon,
  ClapperboardIcon,
  ComputerIcon,
  DumbbellIcon,
  FactoryIcon,
  HandPlatterIcon,
  HandshakeIcon,
  HardHatIcon,
  HeadsetIcon,
  HeartHandshakeIcon,
  LandmarkIcon,
  LanguagesIcon,
  NetworkIcon,
  OmegaIcon,
  PaletteIcon,
  PalmtreeIcon,
  ScaleIcon,
  SchoolIcon,
  ShapesIcon,
  SmileIcon,
  StoreIcon,
  SyringeIcon,
  TractorIcon,
  TruckIcon,
  UmbrellaIcon,
  UniversityIcon,
  UserIcon,
  UserRoundSearchIcon,
  UsersIcon,
  UtensilsIcon,
  WallpaperIcon,
  WarehouseIcon,
} from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/ui/base-ui/navigation-menu';
import { Link } from '@/ui/link';

const categories = [
  {
    label: 'IT, Programare',
    slug: 'it-programare',
    description: '',
    icon: ComputerIcon,
  },
  {
    label: 'Autorități Publice',
    slug: 'autoritati-publice',
    description: '',
    icon: SchoolIcon,
  },
  {
    label: 'Achiziții',
    slug: 'achizitii',
    description: '',
    icon: BriefcaseBusinessIcon,
  },
  {
    label: 'Asigurări',
    slug: 'asigurari',
    description: '',
    icon: UmbrellaIcon,
  },
  {
    label: 'Bănci, creditare',
    slug: 'banci-creditare',
    description: '',
    icon: LandmarkIcon,
  },
  {
    label: 'Comerț cu amănuntul',
    slug: 'comert-cu-amanuntul',
    description: '',
    icon: StoreIcon,
  },
  {
    label: 'Construcții, Reparații, Arhitectură',
    slug: 'constructii-reparatii-arhitectura',
    description: '',
    icon: HardHatIcon,
  },
  {
    label: 'Contabilitate, economiști',
    slug: 'contabilitate-economisti',
    description: '',
    icon: ShapesIcon,
  },
  {
    label: 'Cultură, artă',
    slug: 'cultura-arta',
    description: '',
    icon: PaletteIcon,
  },
  {
    label: 'Cursuri, traininguri',
    slug: 'cursuri-traininguri',
    description: '',
    icon: SchoolIcon,
  },
  {
    label: 'Design',
    slug: 'design',
    description: '',
    icon: WallpaperIcon,
  },
  {
    label: 'Entertainment, Show Business',
    slug: 'entertainment-show-business',
    description: '',
    icon: ClapperboardIcon,
  },
  {
    label: 'Frumusețe, Fitness, Sport',
    slug: 'frumusete-fitness-sport',
    description: '',
    icon: DumbbellIcon,
  },
  {
    label: 'Gospodării agricole',
    slug: 'gospodarii-agricole',
    description: '',
    icon: TractorIcon,
  },
  {
    label: 'Imobile',
    slug: 'imobile',
    description: '',
    icon: BuildingIcon,
  },
  {
    label: 'Industria serviciilor',
    slug: 'industria-serviciilor',
    description: '',
    icon: FactoryIcon,
  },
  {
    label: 'Ingineri',
    slug: 'ingineri',
    description: '',
    icon: OmegaIcon,
  },
  {
    label: 'Instituții publice',
    slug: 'institutii-publice',
    description: '',
    icon: UniversityIcon,
  },
  {
    label: 'Juridică',
    slug: 'juridica',
    description: '',
    icon: ScaleIcon,
  },
  {
    label: 'Limbi străine, Traducători',
    slug: 'limbi-straine-traducatori',
    description: '',
    icon: LanguagesIcon,
  },
  {
    label: 'Locuri de munca în străinătate',
    slug: 'locuri-de-munca-in-strainatate',
    description: '',
    icon: SchoolIcon,
  },
  {
    label: 'Magazinieri, Depozitari, Antrepozit',
    slug: 'magazinieri-depozitari-antrepozit',
    description: '',
    icon: WarehouseIcon,
  },
  {
    label: 'Manageri',
    slug: 'manageri',
    description: '',
    icon: SchoolIcon,
  },
  {
    label: 'Marketing de rețea',
    slug: 'marketing-de-retea',
    description: '',
    icon: ChartLineIcon,
  },
  {
    label: 'Marketing, publicitate, PR',
    slug: 'marketing-publicitate-pr',
    description: '',
    icon: ChartLineIcon,
  },
  {
    label: 'Mass-media, jurnalism',
    slug: 'mass-media-jurnalism',
    description: '',
    icon: SchoolIcon,
  },
  {
    label: 'Medicină, farmacie',
    slug: 'medicina-farmacie',
    description: '',
    icon: SyringeIcon,
  },
  {
    label: 'Muncitori auxiliari, hamali',
    slug: 'muncitori-auxiliari-hamali',
    description: '',
    icon: SchoolIcon,
  },
  {
    label: 'ONG și fundații caritabile',
    slug: 'ong-si-fundatii-caritabile',
    description: '',
    icon: HeartHandshakeIcon,
  },
  {
    label: 'Operatori telefonici, Call centre',
    slug: 'operatori-telefonici-call-centre',
    description: '',
    icon: HeadsetIcon,
  },
  {
    label: 'Pedagogi, Traininguri',
    slug: 'pedagogi-traininguri',
    description: '',
    icon: SchoolIcon,
  },
  {
    label: 'Personal birou',
    slug: 'personal-birou',
    description: '',
    icon: UsersIcon,
  },
  {
    label: 'Personal casnic',
    slug: 'personal-casnic',
    description: '',
    icon: UserIcon,
  },
  {
    label: 'Personal de serviciu',
    slug: 'personal-de-serviciu',
    description: '',
    icon: HandPlatterIcon,
  },
  {
    label: 'Producție',
    slug: 'productie',
    description: '',
    icon: FactoryIcon,
  },
  {
    label: 'Psihologia',
    slug: 'psihologia',
    description: '',
    icon: SmileIcon,
  },
  {
    label: 'Restaurante, Alimentație Publică',
    slug: 'restaurante-alimentatie-publica',
    description: '',
    icon: UtensilsIcon,
  },
  {
    label: 'Resurse Umane, HR, recrutare',
    slug: 'resurse-umane-hr-recrutare',
    description: '',
    icon: UserRoundSearchIcon,
  },
  {
    label: 'Rețea de telecomunicații',
    slug: 'retea-de-telecomunicatii',
    description: '',
    icon: NetworkIcon,
  },
  {
    label: 'Servicii pază, securitate',
    slug: 'servicii-paza-securitate',
    description: '',
    icon: CctvIcon,
  },
  {
    label: 'Șoferi',
    slug: 'soferi',
    description: '',
    icon: CarIcon,
  },
  {
    label: 'Top management',
    slug: 'top-management',
    description: '',
    icon: UserIcon,
  },
  {
    label: 'Transport, Logistică',
    slug: 'transport-logistica',
    description: '',
    icon: TruckIcon,
  },
  {
    label: 'Turism, Industria Ospitalității',
    slug: 'turism-industria-ospitalitatii',
    description: '',
    icon: PalmtreeIcon,
  },
  {
    label: 'Vânzări',
    slug: 'vanzari',
    description: '',
    icon: HandshakeIcon,
  },
] as const;

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={
              <Link
                unstyled
                href="/"
              />
            }
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid list-none grid-cols-1 xs:grid-cols-2 gap-2 md:grid-cols-3">
              {categories.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <NavigationMenuLink
                      render={
                        <Link
                          unstyled
                          href={{ pathname: '/jobs/category/[slug]', params: { slug: item.slug } }}
                        />
                      }
                    >
                      <Icon
                        className="size-4 shrink-0 stroke-[1.5]"
                        absoluteStrokeWidth
                      />
                      <p className="font-medium">{item.label}</p>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={
              <Link
                unstyled
                href="/about"
              />
            }
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={
              <Link
                unstyled
                href="/contact"
              />
            }
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { Navbar };
