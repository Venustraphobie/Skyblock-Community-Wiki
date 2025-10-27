# Erntemaschine
![Erntemaschine](@site/static/img/de/custom-blocks/harvestmachine.webp)

Die Erntemaschine ist ein essenzieller Block für die Automatisierung des [Marktstands](../game-mechanics/marketstall.md). Sie funktioniert so wie ein Farmer Villager. Die Erntemaschine scannt einen 9x9 Bereich nach Pflanzen und erntet diese, sobald sie vollständig gewachsen sind. Wenn die 9x9 Fläche erfolgreich gescannt wird und keine Pflanzen fehlen, leuchtet die 9x9 Fläche grün. Wenn Pflanzen fehlen, leuchtet sie rot.

:::warning
Es können NUR Weizen, Kartoffeln, rote Beete und Karotten von der Erntemaschine geerntet werden! Alle anderen Pflanzen können NICHT geerntet werden.
:::

Die geernteten Pflanzen speichert die Erntemaschine in ihrem Inventar, welches 5 Slots hat. Sobald diese Slots voll sind droppt die Erntemaschine jede weitere geerentete Pflanze. 

Indem du einen [Trichter oder eine Röhre](./hoppers.md) unter die Erntemaschine platzierst, kannst du die Pflanzen in den Trichter weiterleiten und diese mit Röhren oder ähnlichem an z.B. eine Kiste weiterleiten.