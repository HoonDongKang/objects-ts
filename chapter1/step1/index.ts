import { Audience } from './Audience';
import { Invitation } from './Invitation';
import { Bag } from './Bag';
import { Theater } from './Theater';
import { TicketSeller } from './TicketSeller';
import { TicketOffice } from './TicketOffice';
import { Ticket } from './Ticket';

const invitation = new Invitation(new Date());

const tickets = [new Ticket(500), new Ticket(500)];

const bagWithInvi = new Bag(1000, invitation);
const bagWithoutInvi = new Bag(1000);

const AudienceWithInvi = new Audience(bagWithInvi);
const AudienceWithoutInvi = new Audience(bagWithoutInvi);

const ticketOffice = new TicketOffice(0, tickets);

const ticketSeller = new TicketSeller(ticketOffice);

const theater = new Theater(ticketSeller);

theater.enter(AudienceWithInvi);
theater.enter(AudienceWithoutInvi);
