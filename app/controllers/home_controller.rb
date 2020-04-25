class HomeController < ApplicationController
  def index
    url = URI.parse('http://api.pathofexile.com/public-stash-tabs')
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }
    stuff = JSON.parse(res.body)
    next_change_id = stuff["next_change_id"]
     
    @stashes_with_items = stuff["stashes"].filter{|s| s["items"] != []}
    @stashes_with_items_public = @stashes_with_items.filter{|s| s["public"] == true}
    @_with_stash_prices = @stashes_with_items_public.filter{|s| s["stash"].match(/~/)}
    @_with_individual_prices = @stashes_with_items_public.filter{|s| s["items"].select{|i| i["note"]&.match(/~/)}.length > 0 }
    
  end
end
