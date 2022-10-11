import { useEffect } from 'react'
export const AdUnit = ({ path }) => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [path])
  return (
    <ins
      class="adsbygoogle"
      style={{display:'block'}}
      data-ad-client="ca-pub-xxxxxxxxxxxxxxxxx"
      data-ad-slot="xxxxxxxxxx"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}