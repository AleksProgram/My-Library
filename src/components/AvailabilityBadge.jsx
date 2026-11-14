function AvailabilityBadge({ book }) {
  const isAvailable = book.copies > 0

  return (
    <p className={`availability-badge ${isAvailable ? 'available' : 'unavailable'}`}>
      {isAvailable ? 'Available' : 'Not available'}
    </p>
  )
}

export default AvailabilityBadge
