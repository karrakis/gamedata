import React, { useState } from "react"

export default ({ data }) => {
    const stashes = data.stashes_with.stash_prices.map((s) => [s.stash, [...new Set(s.items.map((i) => i.name))]])
    return <div>{JSON.stringify(stashes)}</div>
}