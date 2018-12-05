json.extract! @party, :name, :location

json.guests do 
  @party.guests.each do |guest| 
    json.set! guest.id do 
      json.extract! guest, :name, :id
    end 
  end
end 

