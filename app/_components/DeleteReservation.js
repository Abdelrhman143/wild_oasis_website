function DeleteReservation({ bookingId }) {
  return (
    <button className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900">
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
