import React from 'react'
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';

import ex from "../../app/utils/ex.json"

const DownloadLink = (props) => {

    var object=props.data
    
    const styles = StyleSheet.create({
        page: {
          paddingTop: 35,
          paddingBottom: 65,
          paddingHorizontal: 35,
        },
        header: {
          fontSize: 12,
          marginBottom: 20,
          textAlign: 'center',
          color: 'grey',
        },
        image:{
          height:"200",
          width:"140"
        },
        table: { 
          display: "table", 
          width: "auto", 
          borderStyle: "none", 
          borderWidth: 0, 
          borderRightWidth: 0, 
          borderBottomWidth: 0 ,
          
        }, 
        section:{marginBottom: 30,
          fontSize: 14,
          textAlign: 'justify',
          fontFamily: 'Times-Roman'},
      
        tableRow: { 
          margin: "auto", 
          flexDirection: "row" 
        }, 
        tableCol: { 
          width: "45%", 
          borderStyle: "solid", 
          borderWidth: 1, 
          borderLeftWidth: 0, 
          borderTopWidth: 0 
        }, 
        tableCell: { 
          margin: "auto", 
          marginTop: 5, 
          fontSize: 10 ,
          height:"20%",
        }
        , pageNumber: {
          position: 'absolute',
          fontSize: 12,
          bottom: 30,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'grey',
        },
        highlight:{
            backgroundColor: 'yellow'
        }
      });

    const MyDoc = () => (
        <Document>
          <Page size="A4" style={styles.page}>
          <Text style={styles.header} fixed>
          ~ exercises selected from various sources ~
        </Text>
    
          <View > 
                <View style={styles.table}>
                    <Text style={styles.highlight}>Exercises to be performed independently</Text>
                  {object["indep"].map(e=>(
                    
                    <View key={JSON.stringify(e)}style={styles.tableRow}>
                      <View style={styles.tableCol}> 
                  <Image style={styles.image} src={`/assets/${e}.jpg`||`/assets/${e}.png`}></Image> 
                </View> 
                <View style={styles.tableCol}> 
                  
                  <Text style={styles.tableCell}>{ex.filter((ex)=>ex.id==e)[0].Exercises}</Text> 
                 
                </View> 
                    </View>
    
    
                  ))}
                  </View>

              


    
               
          
        </View>
           
           
            
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
              
            
            
          </Page>
          <Page size="A4" style={styles.page}>
          <View style={styles.table}>
                    <Text  style={styles.highlight}>Exercises to be performed with visual supervision </Text>
                  {object["supervision"].map(e=>(
                    
                    <View key={JSON.stringify(e)}style={styles.tableRow}>
                      <View style={styles.tableCol}> 
                  <Image style={styles.image} src={`/assets/${e}.jpg`||`/assets/${e}.png`}></Image> 
                </View> 
                <View style={styles.tableCol}> 
                  
                  <Text style={styles.tableCell}>{ex.filter((ex)=>ex.id==e)[0].Exercises}</Text> 
                </View> 
                    </View>
    
    
                  ))}
                  </View>

            
          </Page>
          <Page size="A4" style={styles.page}>
          <View style={styles.table}>
                    <Text  style={styles.highlight}>Exercises to be performed with someone providing close assitance and to provide help in case of losing balance </Text>
                  {object["sba"].map(e=>(
                    
                    <View key={JSON.stringify(e)}style={styles.tableRow}>
                      <View style={styles.tableCol}> 
                  <Image style={styles.image} src={`/assets/${e}.jpg`||`/assets/${e}.png`}></Image> 
                </View> 
                <View style={styles.tableCol}> 
                  
                  <Text style={styles.tableCell}>{ex.filter((ex)=>ex.id==e)[0].Exercises}</Text> 
                </View> 
                    </View>
    
    
                  ))}
                  </View>
          </Page>
          <Page size="A4" style={styles.page}>
          <View style={styles.table}>
                    <Text  style={styles.highlight}>Exercises to be performed with someone providing hands on assistance with trained carers </Text>
                  {object["handsonassist"].map(e=>(
                    
                    <View key={JSON.stringify(e)}style={styles.tableRow}>
                      <View style={styles.tableCol}> 
                  <Image style={styles.image} src={`/assets/${e}.jpg`||`/assets/${e}.png`}></Image> 
                </View> 
                <View style={styles.tableCol}> 
                  
                  <Text style={styles.tableCell}>{ex.filter((ex)=>ex.id==e)[0].Exercises}</Text> 
                </View> 
                    </View>
    
    
                  ))}
                  </View>
         
          </Page>
        </Document>
      );
   
   
    
  return (
    <PDFDownloadLink document={<MyDoc/>} fileName="HEP.pdf" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
     >
  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : `Download exercise program now!`)}
</PDFDownloadLink>
  )
}

export default DownloadLink