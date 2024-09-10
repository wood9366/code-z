<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.11.0" name="desert" tilewidth="32" tileheight="32" spacing="1" margin="1" tilecount="48" columns="8">
 <image source="tmw_desert_spacing.png" width="265" height="199"/>
 <tile id="0">
  <objectgroup draworder="index" id="3">
   <object id="15" x="16.0485" y="14.8727" width="17.1655" height="18.1649"/>
  </objectgroup>
 </tile>
 <tile id="1">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-1.05819" y="15.049" width="34.331" height="18.9292"/>
  </objectgroup>
 </tile>
 <tile id="2">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-1.23456" y="15.0491" width="18.1649" height="18.2237"/>
  </objectgroup>
 </tile>
 <tile id="8">
  <objectgroup draworder="index" id="2">
   <object id="1" x="15.9897" y="-1.17578" width="17.871" height="35.0952"/>
  </objectgroup>
 </tile>
 <tile id="9">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="10">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-1.29336" y="-1.41093" width="18.2825" height="34.9189"/>
  </objectgroup>
 </tile>
 <tile id="16">
  <objectgroup draworder="index" id="2">
   <object id="1" x="16.0485" y="-1.17578" width="16.754" height="17.9885"/>
  </objectgroup>
 </tile>
 <tile id="17">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-1.46972" y="-0.823039" width="34.2134" height="17.8121"/>
  </objectgroup>
 </tile>
 <tile id="18">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.881834" y="-0.764256" width="17.8122" height="17.577"/>
  </objectgroup>
 </tile>
 <tile id="19">
  <objectgroup draworder="index" id="2">
   <object id="2" x="0" y="0" width="32" height="17.0096">
    <polygon points="-1.23457,-1.41093 33.4109,-1.46972 33.3521,16.9509 16.9994,16.8921 17.0531,33.2933 -1.3384,33.1408"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="20">
  <objectgroup draworder="index" id="2">
   <object id="1" x="32.1142" y="-0.0465077" width="32" height="17.0096" rotation="90">
    <polygon points="-1.5873,-1.17578 33.5873,-1.35215 33.6461,16.0102 16.8818,16.0102 16.8766,33.6461 -1.51477,33.7875"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="27">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.050948" y="31.9193" width="32" height="17.0096" rotation="270.171">
    <polygon points="-1.41566,-1.58309 34.1115,-1.65239 33.9985,16.8861 16.8229,16.9484 16.9406,33.8781 -1.50951,33.733"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="28">
  <objectgroup draworder="index" id="2">
   <object id="1" x="32.165" y="32.0342" width="32" height="17.0096" rotation="179.843">
    <polygon points="-1.11345,-1.29641 33.4153,-1.58344 33.4105,17.1899 15.9412,17.0095 15.8738,33.4698 -1.16669,33.6668"/>
   </object>
  </objectgroup>
 </tile>
 <wangsets>
  <wangset name="desert" type="corner" tile="-1">
   <wangcolor name="sand" color="#ff0000" tile="-1" probability="1"/>
   <wangcolor name="wall" color="#00ff00" tile="-1" probability="1"/>
   <wangcolor name="stone" color="#0000ff" tile="-1" probability="1"/>
   <wangcolor name="dirt" color="#ff7700" tile="-1" probability="1"/>
   <wangtile tileid="0" wangid="0,1,0,2,0,1,0,1"/>
   <wangtile tileid="1" wangid="0,1,0,2,0,2,0,1"/>
   <wangtile tileid="2" wangid="0,1,0,1,0,2,0,1"/>
   <wangtile tileid="3" wangid="0,4,0,1,0,4,0,4"/>
   <wangtile tileid="4" wangid="0,4,0,4,0,1,0,4"/>
   <wangtile tileid="5" wangid="0,1,0,4,0,1,0,1"/>
   <wangtile tileid="6" wangid="0,1,0,4,0,4,0,1"/>
   <wangtile tileid="7" wangid="0,1,0,1,0,4,0,1"/>
   <wangtile tileid="8" wangid="0,2,0,2,0,1,0,1"/>
   <wangtile tileid="9" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="10" wangid="0,1,0,1,0,2,0,2"/>
   <wangtile tileid="11" wangid="0,1,0,4,0,4,0,4"/>
   <wangtile tileid="12" wangid="0,4,0,4,0,4,0,1"/>
   <wangtile tileid="13" wangid="0,4,0,4,0,1,0,1"/>
   <wangtile tileid="14" wangid="0,4,0,4,0,4,0,4"/>
   <wangtile tileid="15" wangid="0,1,0,1,0,4,0,4"/>
   <wangtile tileid="16" wangid="0,2,0,1,0,1,0,1"/>
   <wangtile tileid="17" wangid="0,2,0,1,0,1,0,2"/>
   <wangtile tileid="18" wangid="0,1,0,1,0,1,0,2"/>
   <wangtile tileid="19" wangid="0,2,0,1,0,2,0,2"/>
   <wangtile tileid="20" wangid="0,2,0,2,0,1,0,2"/>
   <wangtile tileid="21" wangid="0,4,0,1,0,1,0,1"/>
   <wangtile tileid="22" wangid="0,4,0,1,0,1,0,4"/>
   <wangtile tileid="23" wangid="0,1,0,1,0,1,0,4"/>
   <wangtile tileid="24" wangid="0,1,0,3,0,1,0,1"/>
   <wangtile tileid="25" wangid="0,1,0,3,0,3,0,1"/>
   <wangtile tileid="26" wangid="0,1,0,1,0,3,0,1"/>
   <wangtile tileid="27" wangid="0,1,0,2,0,2,0,2"/>
   <wangtile tileid="28" wangid="0,2,0,2,0,2,0,1"/>
   <wangtile tileid="29" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="32" wangid="0,3,0,3,0,1,0,1"/>
   <wangtile tileid="33" wangid="0,3,0,3,0,3,0,3"/>
   <wangtile tileid="34" wangid="0,1,0,1,0,3,0,3"/>
   <wangtile tileid="35" wangid="0,3,0,1,0,3,0,3"/>
   <wangtile tileid="36" wangid="0,3,0,3,0,1,0,3"/>
   <wangtile tileid="40" wangid="0,3,0,1,0,1,0,1"/>
   <wangtile tileid="41" wangid="0,3,0,1,0,1,0,3"/>
   <wangtile tileid="42" wangid="0,1,0,1,0,1,0,3"/>
   <wangtile tileid="43" wangid="0,1,0,3,0,3,0,3"/>
   <wangtile tileid="44" wangid="0,3,0,3,0,3,0,1"/>
  </wangset>
 </wangsets>
</tileset>
