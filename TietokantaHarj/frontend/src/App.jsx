import { useState } from "react";
import Header from "./components/Header";
import Spacer from "./components/Spacer";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import ReadMeetings from "./components/ReasonList";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleMeetingCreated = () => {
    setRefresh(!refresh);
  }

  return (
    <div>
      <Header/>
      <Spacer class="spacer"id="about" />
      <main>
        <Section title="About Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat leo ac ipsum blandit, sed tempus elit rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum tempor efficitur felis, a dictum nisl interdum vitae. Ut in feugiat magna, in maximus nunc. Proin quis sodales nibh, hendrerit mollis nisl. Suspendisse potenti. Nulla non quam et dolor dapibus pretium ac at enim. Fusce interdum nec velit ut vestibulum. Proin id iaculis justo. Proin rutrum nec est vitae lobortis. Etiam rutrum porta est sit amet dignissim. Pellentesque blandit tortor at consequat imperdiet. In eget posuere nunc. Ut ultrices diam sapien, sed scelerisque lectus vestibulum id.

                    Donec semper eleifend turpis elementum condimentum. Phasellus quis tellus sed augue malesuada dictum. Mauris venenatis ante tincidunt pharetra vestibulum. Maecenas scelerisque, nisi nec hendrerit dignissim, velit nisi ultrices urna, eu tempus tortor nunc ut ex. Suspendisse nec elit a urna dapibus vehicula. Nulla nec tincidunt tortor. Suspendisse viverra sem nulla, id fringilla justo pulvinar eget. Aenean iaculis consectetur ex, ut aliquam purus bibendum quis. Fusce justo est, molestie id lorem nec, aliquet vestibulum erat. Nam ultrices sed est in consectetur. Curabitur finibus dui eget ex bibendum posuere at eget ligula.
                    
                    Pellentesque viverra, ligula nec facilisis interdum, nibh nunc dapibus orci, vitae faucibus dui nisl quis quam. Maecenas sodales nibh nisi, id egestas neque pharetra a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultrices sapien massa, nec ornare felis dignissim in. Sed rhoncus, orci ac scelerisque viverra, nibh lectus viverra ante, vitae ornare orci turpis sed magna. Nunc faucibus leo tristique tortor molestie, vel volutpat erat commodo. Duis quis ullamcorper lacus. Praesent ut bibendum arcu. Aliquam in nibh sed tortor scelerisque tempus. Donec volutpat, sapien et vulputate luctus, eros justo mollis urna, eget dapibus nunc magna ut mi. Praesent egestas mauris et ipsum semper eleifend."/>
        <Spacer class="spacerSection" id="staff"/>
        <Section title="Our Staff" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere tincidunt elementum. Nullam pretium diam turpis, nec varius eros lobortis a. In ornare risus lorem, id convallis neque vehicula in. Duis sed semper nisl, quis dictum diam. Maecenas lacinia felis augue, in accumsan ipsum scelerisque in. Quisque posuere massa eu varius iaculis. Maecenas sit amet tincidunt urna, id tempus metus. Ut bibendum, elit sed rutrum hendrerit, diam nunc ullamcorper odio, nec posuere quam nisl sit amet eros. Pellentesque cursus lorem ac convallis posuere.

                    Ut molestie orci et interdum lacinia. Maecenas quis eros eu ipsum pretium ultricies. Sed at rutrum ex, id suscipit urna. Sed eget justo at ligula iaculis porttitor. Sed a nibh a lectus dapibus varius. Morbi sagittis pharetra nisl et feugiat. Curabitur bibendum diam elementum, mattis nibh a, maximus orci.
                    
                    Suspendisse potenti. In in arcu mi. Integer placerat varius dui. Nulla vehicula, orci vel varius consectetur, sapien quam bibendum dolor, vel ornare ipsum felis id est. Donec cursus eu nulla vitae blandit. Integer risus magna, mattis pharetra leo et, pulvinar condimentum sapien. Vivamus fringilla erat nisi, ut congue orci gravida at. Cras molestie, magna nec tincidunt tincidunt, magna augue consequat elit, et luctus nisi eros vel est. Aenean in porttitor nisi. Sed varius pulvinar nisi vel ultricies. Duis et scelerisque quam. Donec volutpat eget orci nec finibus. Phasellus arcu enim, vestibulum id felis vel, mattis malesuada sem. Suspendisse vulputate faucibus elementum. Morbi at mauris purus. Morbi tincidunt nisl nec sagittis laoreet.
                    
                    Sed commodo, nunc nec blandit pulvinar, massa purus tristique lectus, vitae facilisis felis dui id dui. Nam dictum vulputate augue ut tincidunt. Vivamus a ornare leo. Phasellus vel commodo odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas finibus molestie semper. Quisque nec urna lobortis, mollis purus eu, ultricies nulla. Nunc sit amet varius nisl. Sed mi libero, tristique sit amet lacus eu, congue maximus quam. Nulla ac lacinia nibh. Mauris commodo viverra mi eget dignissim. Maecenas elementum sed orci suscipit rutrum. Fusce quis velit elit. Aliquam id augue quis lorem vulputate imperdiet in in dolor."/>
        <Spacer class="spacerSection" id="history"/>
        <Section title="About Our Company's History" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim sit amet enim auctor congue. Sed mollis enim ac quam dignissim rutrum. Nulla facilisi. Nunc cursus turpis quis posuere scelerisque. Ut dapibus ullamcorper ante in ullamcorper. Nunc ut gravida dui. Etiam ut enim porta justo feugiat vehicula. Nulla id massa eu erat posuere egestas. Morbi neque enim, auctor nec mollis a, ultricies ut velit. Pellentesque nec tempor diam. Donec eu tempus orci, sit amet posuere nisi.

                    Pellentesque luctus neque at leo laoreet, quis porttitor elit addliquam. Fusce vehicula eleifend ante ut sodales. In ullamcorper dolor malesuada metus tincidunt condimentum. Nulla ullamcorper molestie arcu, quis lacinia ante venenatis in. Curabitur ac metus dapibus, sollicitudin justo dapibus, sollicitudin mi. Vivamus venenatis, nunc et efficitur vulputate, quam odio euismod ex, vitae pulvinar ante elit et nibh. Nulla euismod ornare sem, non lobortis risus ornare sed. Fusce neque eros, imperdiet in leo nec, fringilla elementum dolor. Quisque efficitur libero a gravida iaculis.
                    
                    Morbi vitae urna facilisis, porttitor odio ac, tincidunt urna. Proin non placerat elit, sit amet rutrum erat. Cras volutpat massa diam, eu tristique felis vulputate ut. In vel velit nec risus aliquam pellentesque. Aliquam erat volutpat. Donec sodales est velit, in bibendum lacus lobortis non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent in nunc ut diam bibendum consequat a ut nibh. Vivamus nisl ligula, consequat non risus laoreet, facilisis auctor ex. Nunc nulla nulla, elementum vitae porttitor eu, maximus facilisis neque. Etiam ante ex, finibus a augue vitae, faucibus fringilla sem. Nulla a elit quis ex faucibus blandit eu vel velit. Integer rhoncus libero ut metus placerat, vitae vehicula massa posuere. Suspendisse potenti. In nec tellus ut orci efficitur consequat. Maecenas laoreet dui ac purus volutpat, vehicula laoreet mauris viverra.
                    
                    Sed elementum non urna et imperdiet. Phasellus nec odio et tellus egestas volutpat vel ac arcu. Nam rutrum metus velit, vitae fringilla lectus convallis id. Donec non leo vel nisl scelerisque feugiat. Nam sit amet dolor ut libero auctor porta. Sed in urna semper, venenatis leo eu, tempor velit. Praesent odio erat, dignissim eget est a, dapibus convallis nisi. Ut faucibus magna quis mollis vehicula. Duis vulputate pellentesque faucibus. Sed rhoncus condimentum nisl, accumsan mollis tellus efficitur at. Duis at ipsum et urna lacinia ultricies at sed tortor. Phasellus pellentesque urna a odio consectetur, quis faucibus arcu elementum."/>
        <Spacer class="spacerSection" id="contact"/>
        <Section title="Contact Information" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac ligula nec erat auctor fermentum. Vestibulum facilisis, ante a tempor molestie, nisl velit sodales nibh, eget gravida ante dui nec arcu. Etiam posuere eget metus vel ullamcorper. Phasellus faucibus neque at purus tincidunt congue. Nulla finibus libero id lacinia tincidunt. Ut urna magna, scelerisque quis euismod ut, aliquet quis ligula. In suscipit ligula at velit ultrices, ac dictum nibh mollis. Fusce id condimentum nulla. Nunc ultrices enim vitae ante viverra, vel varius mauris vestibulum. In quis tellus eget leo mollis tempus a nec nisi. Praesent bibendum, est ac fermentum condimentum, ex lorem commodo arcu, sed imperdiet elit nunc eget magna. Nam sollicitudin tincidunt metus vel congue. Pellentesque blandit lorem eget leo commodo, viverra vehicula velit tristique. Maecenas congue, lacus ac hendrerit hendrerit, ipsum nibh iaculis mi, in rhoncus mi quam id mi.

                    Aenean at consequat felis. Vivamus pretium vel est sit amet mollis. Nulla interdum urna sit amet bibendum malesuada. Nunc at viverra purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget feugiat velit. Sed eget lacus ex. Donec ut tortor vel nulla fringilla feugiat quis a justo.
                    
                    Quisque faucibus lectus dolor, sit amet rhoncus ex pretium et. Curabitur lobortis maximus lacinia. Vestibulum metus eros, consectetur vitae sagittis at, venenatis at lectus. Donec dapibus at velit pretium lacinia. In nulla nisi, suscipit fringilla orci eu, accumsan egestas urna. Curabitur non magna id risus imperdiet pellentesque eu a dolor. Quisque congue elit eget nunc pharetra luctus. Sed mi neque, vulputate id tincidunt ut, sollicitudin iaculis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent sed nunc nec sapien fermentum vehicula ut at neque. Vestibulum suscipit vitae urna eu sodales."/>
        <Spacer class="spacerSection" id="book"/>
        <ContactForm onMeetingCreated={handleMeetingCreated}/>
        <Spacer class="spacerSection"/>
        <ReadMeetings refresh={refresh}/>
      </main>
      
      
    </div>
  )
  
}

export default App
